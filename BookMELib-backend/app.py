from flask import Flask, jsonify
from flask_smorest import Api
from flask_migrate import Migrate
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from db import db
from dotenv import load_dotenv


import os
from blocklist import BLOCKLIST
from resources.business import blp as BusinessBlueprint
from resources.auth import blp as AuthBlueprint
from resources.role import blp as RoleBlueprint
from resources.user import blp as UserBlueprint
from resources.service import blp as ServiceBlueprint
from resources.category import blp as CategoryBlueprint
from resources.appointment import blp as AppointmentBlueprint

def create_app(db_url=None):
    load_dotenv(".env.dev") # Load environment variables from .env file
    app = Flask(__name__)
    app.config["PROPAGATE_EXCEPTIONS"] = True
    app.config["API_TITLE"] = "BookMeLib REST API"
    app.config["API_VERSION"] = "v1"
    app.config["OPENAPI_VERSION"] = "3.0.3"
    app.config["OPENAPI_URL_PREFIX"] = "/"
    app.config["OPENAPI_SWAGGER_UI_PATH"] = "/swagger-ui"
    app.config["OPENAPI_SWAGGER_UI_URL"] = "https://cdn.jsdelivr.net/npm/swagger-ui-dist/"
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url or os.getenv("DATABASE_URL")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["PROPAGATE_EXCEPTIONS"] = True

    # Load environment variables from .env file
    # load_dotenv(".env.dev")  # or .env.prod
    
    # Initialize database
    db.init_app(app)
    
    # Initialize Flask-Migrate for database migrations
    Migrate(app, db)

    # Initialize Flask-Smorest for API management
    api = Api(app)
    
    # Enable CORS (Cross-Origin Resource Sharing)
    CORS(app)  # Enables CORS for all routes by default

    # Initialize JWT for authentication
    app.config["JWT_SECRET_KEY"] = "your-secure-random-key-here"
    jwt = JWTManager(app)

    # JWT token blacklist handling
    @jwt.token_in_blocklist_loader
    def check_if_token_in_blocklist(jwt_header, jwt_payload):
        return jwt_payload["jti"] in BLOCKLIST

    @jwt.revoked_token_loader
    def revoked_token_callback(jwt_header, jwt_payload):
        return jsonify(
            {"description": "The token has been revoked.", "error": "token_revoked"}
        ), 401

    @jwt.needs_fresh_token_loader
    def token_not_fresh_callback(jwt_header, jwt_payload):
        return jsonify(
            {"description": "The token is not fresh.", "error": "fresh_token_required"}
        ), 401

    @jwt.expired_token_loader
    def expired_token_callback(jwt_header, jwt_payload):
        return jsonify(
            {"description": "The token has expired.", "error": "token_expired"}
        ), 401

    @jwt.unauthorized_loader
    def unauthorized_callback(error):
        return jsonify(
            {"description": "Missing or invalid token.", "error": "authorization_required"}
        ), 401

    @jwt.invalid_token_loader
    def invalid_token_callback(error):
        return jsonify(
            {"description": "Signature verification failed.", "error": "invalid_token"}
        ), 401

    with app.app_context():
        db.create_all()

    # Register the Blueprints
    api.register_blueprint(RoleBlueprint)
    api.register_blueprint(AuthBlueprint)
    api.register_blueprint(UserBlueprint)
    api.register_blueprint(BusinessBlueprint)
    api.register_blueprint(ServiceBlueprint)
    api.register_blueprint(CategoryBlueprint)
    api.register_blueprint(AppointmentBlueprint)

    return app
