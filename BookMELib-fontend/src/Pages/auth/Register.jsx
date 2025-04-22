import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "@/stores/authStore";
import useBusinessStore from "@/stores/businessStore";
import { mdiEye, mdiEyeOff } from "@mdi/js";
import Icon from "@mdi/react";
import { set } from "date-fns";

const Register = () => {
  const { register, loading, error } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const {
    businesses,
    fetchBusinesses,
    loading: businessLoading,
    error: businessError,
  } = useBusinessStore();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
    address: "",
    business_id: "",
    phone_number: "",
    user_type: "customer",
  });

  useEffect(() => {
    fetchBusinesses();
  }, [fetchBusinesses]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {}, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { confirmPassword, ...registrationData } = formData;
    const success = await register(registrationData);

    if (success) {
      navigate("/");
    }
    nn;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create Your Account
          </h2>
        </div>

        <form onSubmit={handleSignUp} className="space-y-5 mb-5">
          {/* First Name */}
          <div>
            <label
              htmlFor="first_name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last_name"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
                placeholder="Enter your password"
                required
                minLength="6"
              />

              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
              >
                <Icon path={showPassword ? mdiEyeOff : mdiEye} size={0.7} />
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Confirm Password
            </label>

            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
                placeholder="Confirm your password"
                required
              />

              <span
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer text-gray-500"
              >
                <Icon
                  path={showConfirmPassword ? mdiEyeOff : mdiEye}
                  size={0.8}
                />
              </span>
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone_number"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your phone number"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              placeholder="Enter your address"
            />
          </div>

          {/* Business Dropdown */}

          <div>
            <label
              htmlFor="business_id"
              className="block text-sm font-semibold text-gray-700 mb-1"
            >
              Select Business
            </label>
            <select
              id="business_id"
              name="business_id"
              value={formData.business_id}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-teal-200 focus:outline-none text-sm"
              required
              disabled={businessLoading}
            >
              <option value="">-- Select a Business --</option>
              {businesses.length > 0 ? (
                businesses.map((business) => (
                  <option key={business.id} value={business.id}>
                    {business.name}
                  </option>
                ))
              ) : (
                <option disabled>No businesses available</option>
              )}
            </select>
            {businessLoading && (
              <p className="text-sm text-gray-500 mt-1">
                Loading businesses...
              </p>
            )}
            {businessError && (
              <p className="text-red-500 text-sm mt-1">{businessError}</p>
            )}
          </div>

          {/* Hidden user_type */}
          <input type="hidden" name="user_type" value="customer" />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-teal-500 hover:bg-teal-600 uppercase text-white font-semibold text-sm py-2.5 rounded-md transition ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
