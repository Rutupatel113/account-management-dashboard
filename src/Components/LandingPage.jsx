import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen  flex flex-col items-center px-6">
      <h1 className="mt-20 text-5xl font-bold text-cyan-600">
        Account Management System
      </h1>
      <p className="text-gray-600 text-center mt-2">
        Secure, modern, and easy-to-use account management
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/login"
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100"
        >
          Sign Up
        </Link>
      </div>

      {/* features */}
      <div className="grid md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        <div className="p-6 rounded-xl shadow bg-white">
          <div className="text-cyan-500 text-4xl mb-3">🔒</div>
          <h3 className="font-bold text-lg">Secure Authentication</h3>
          <p className="text-gray-600 mt-2">
            Your data is protected with advanced encryption
          </p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <div className="text-cyan-500 text-4xl mb-3">👤</div>
          <h3 className="font-bold text-lg">Easy Profile Management</h3>
          <p className="text-gray-600 mt-2">
            Update your info anytime with ease
          </p>
        </div>

        <div className="p-6 rounded-xl shadow bg-white">
          <div className="text-cyan-500 text-4xl mb-3">👥</div>
          <h3 className="font-bold text-lg">Quick Sign Up</h3>
          <p className="text-gray-600 mt-2">
            Register instantly and start using your account
          </p>
        </div>
      </div>
    </div>
  );
}
