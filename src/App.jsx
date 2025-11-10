import { BrowserRouter, Routes, Route, Navigate  } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";

export default function App() {
  const isLoggedIn = localStorage.getItem("user");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
