import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";

function Login() {
  const { login, loading, error, user } = useAuthStore();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(formData);

    if (success) {
      const { user_type } = useAuthStore.getState().user || {};

      // Check user type and navigate accordingly
      if (user_type === "super_admin") {
        navigate("/Admindashboard", { replace: true });
      } else if (user_type === "customer") {
        navigate("/userdashboard", { replace: true });
      } else if (user_type === "business_admin") {
        navigate("/bussinessadminboard", { replace: true });
      } else {
        useAuthStore.setState({
          error: "Unknown user type. Please contact support.",
        });
        console.error("Error: Unknown user type:", user_type);
      }
    } else {
      useAuthStore.setState({
        error: "Invalid email or password!",
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Welcome Back 👋</h2>
          <p className="text-sm text-gray-600 mt-1">
            Sign in to continue using{" "}
            <span className="font-medium text-teal-600">AppointmentGuy</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm pr-10"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3"
              >
                <Icon
                  path={showPassword ? mdiEyeOff : mdiEye}
                  size={0.7}
                  color="gray"
                />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-right text-sm text-gray-600">
                Don’t have an account?{" "}
              </p>
            </div>

            <div>
              <Link
                to="/register"
                className="text-teal-600 font-medium hover:underline"
                aria-label="Register a new account"
              >
                Register
              </Link>
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-teal-500 hover:bg-teal-600 uppercase text-white font-semibold text-sm py-2.5 rounded-md transition"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
