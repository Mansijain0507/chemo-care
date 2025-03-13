import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Navbar } from "../components/NavBar";
import { Footer } from "../components/Footer";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
  
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const response = await axios.post("http://localhost:3000/api/auth/login", { email, password });
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } catch (err) {
        console.log(err);
        setError("Invalid credentials. Please try again.");
      }
    };
  
    return (
      <div className="h-dvh flex flex-col items-center bg-gray-900 text-white">
        <Navbar />
        <div className="flex flex-col items-center justify-center flex-grow">
          <h2 className="text-3xl font-bold mb-4">Login</h2>
          {error && <p className="text-red-500">{error}</p>}
          <form className="w-80 text-center" onSubmit={handleLogin}>
            <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded text-black" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded text-black" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 p-2 rounded">Login</button>
          </form>
        </div>
        <Footer />
      </div>
    );
  };

  export default Login;