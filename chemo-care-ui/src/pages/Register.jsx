import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, { name, email, password });
      navigate("/login");
    } catch (err) {
        console.log(err)
      setError("Registration failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
      <h2 className="text-3xl font-bold mb-4">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      <form className="w-80" onSubmit={handleRegister}>
        <input type="text" placeholder="Name" className="w-full p-2 mb-4 rounded" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" placeholder="Email" className="w-full p-2 mb-4 rounded" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" className="w-full p-2 mb-4 rounded" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit" className="w-full bg-green-500 hover:bg-green-600 p-2 rounded">Register</button>
      </form>
    </div>
  );
};

export default Register;
