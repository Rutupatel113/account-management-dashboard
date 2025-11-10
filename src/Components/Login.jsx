import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) return alert("No account found. Please register.");
    if (email === storedUser.email && password === storedUser.password) {
      alert("Login successful!");
      navigate("/profile");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-cyan-600">Welcome Back</h2>
      <p className="text-gray-600 mt-1">Sign in to your account</p>

      <div className="mt-8 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg bg-gray-100 mb-4"
        />
        <input
          type="password"
          placeholder="*******"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 border rounded-lg bg-gray-100 mb-6"
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 rounded-lg bg-blue-400 text-white font-semibold hover:opacity-90"
        >
          Sign In
        </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account?
          <Link className="text-blue-600 ml-1" to="/register">Sign up</Link>
        </p>
      </div>
    </div>
  );
}
