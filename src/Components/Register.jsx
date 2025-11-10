import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const user = { name, email, password };
    localStorage.setItem("user", JSON.stringify(user));
    alert("Account created!");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <h2 className="text-4xl font-bold text-cyan-600">Create Account</h2>
      <p className="text-gray-600 mt-1">Join us and manage your account easily</p>

      <div className="mt-8 w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg bg-gray-100 mb-4"
        />
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
          onClick={handleSubmit}
          className="w-full py-3 rounded-lg bg-blue-400 text-white font-semibold hover:opacity-90"
        >
          Sign Up
        </button>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?
          <Link className="text-blue-600 ml-1" to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}
