import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12">
      <h1 className="mt-16 sm:mt-20 text-3xl sm:text-5xl font-bold text-cyan-600 text-center">
        Account Management System
      </h1>
      <p className="text-gray-600 text-center mt-2 text-sm sm:text-base">
        Secure, modern, and easy-to-use account management
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link
          to="/login"
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 text-center"
        >
          Sign In
        </Link>
        <Link
          to="/register"
          className="px-8 py-3 rounded-lg border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 text-center"
        >
          Sign Up
        </Link>
      </div>

      {/* Features */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl">
        {[
          {
            icon: "🔒",
            title: "Secure Authentication",
            text: "Your data is protected with advanced encryption",
          },
          {
            icon: "👤",
            title: "Easy Profile Management",
            text: "Update your info anytime with ease",
          },
          {
            icon: "👥",
            title: "Quick Sign Up",
            text: "Register instantly and start using your account",
          },
        ].map((item, i) => (
          <div key={i} className="p-6 rounded-xl shadow bg-white text-center sm:text-left">
            <div className="text-cyan-500 text-4xl mb-3">{item.icon}</div>
            <h3 className="font-bold text-lg">{item.title}</h3>
            <p className="text-gray-600 mt-2">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
