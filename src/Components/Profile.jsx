import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const [name, setName] = useState(storedUser?.name || "");
  const [email, setEmail] = useState(storedUser?.email || "");
  const [password, setPassword] = useState(storedUser?.password || "");
  const [bio, setBio] = useState(storedUser?.bio || "");
  const [isEditing, setIsEditing] = useState(false);

  const navigate = useNavigate();

  const handleUpdate = () => {
    const updatedUser = { name, email, password, bio };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    alert("Profile updated!");
    setIsEditing(false);
  };

 const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  navigate("/login");
};


  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-cyan-500 mb-10 flex justify-center">My Account</h1>

      {/* Profile Header Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full  flex items-center justify-center text-white text-2xl font-bold">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{name || "User Name"}</h2>
            <p className="text-gray-500">{email || "user@example.com"}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg text-gray-700 font-medium flex items-center gap-2"
        >
          <span>🔒</span> Sign Out
        </button>
      </div>

      {/* Profile Info Section */}
      <div className="max-w-4xl mx-auto mt-8 bg-white rounded-2xl shadow p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-xl font-semibold text-gray-800">
              Profile Information
            </h3>
            <p className="text-gray-500 text-sm">
              Update your personal details
            </p>
          </div>

          {/* Conditional Buttons */}
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
            >
              Save Changes
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className="px-5 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium"
            >
              Edit Profile
            </button>
          )}
        </div>

        <div className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isEditing
                  ? "bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  : "bg-gray-100 text-gray-500 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-3 rounded-lg border bg-gray-100 text-gray-500 cursor-not-allowed"
            />
            <p className="text-sm text-gray-400 mt-1">
              Email cannot be changed
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg border ${
                isEditing
                  ? "bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  : "bg-gray-100 text-gray-500 cursor-not-allowed"
              }`}
            />
          </div>

          {/* Bio */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              disabled={!isEditing}
              placeholder="Tell us about yourself..."
              rows="3"
              className={`w-full p-3 rounded-lg border ${
                isEditing
                  ? "bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  : "bg-gray-100 text-gray-500 cursor-not-allowed"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
