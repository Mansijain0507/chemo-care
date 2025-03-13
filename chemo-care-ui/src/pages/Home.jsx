import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-6">
          {/* Header Section */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold">Smart Health Tracker</h1>
            <p className="text-lg text-gray-400 mt-2">
              A seamless way to manage cancer treatment, track progress, and stay connected with doctors and labs.
            </p>
          </header>
    
          {/* Action Buttons */}
          <div className="flex space-x-4 mb-8">
            <Link to="/register">
              <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
                Register
              </button>
            </Link>
            <Link to="/login">
              <button className="px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg">
                Login
              </button>
            </Link>
          </div>
    
          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {[
              { title: "Role-Based System", desc: "Admins, Doctors, Lab Incharges, and Patients with custom permissions." },
              { title: "Track Chemotherapy", desc: "Monitor sessions, medications, and side effects easily." },
              { title: "Manage Appointments", desc: "Seamlessly schedule and track doctor visits." },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-xl shadow-lg p-4 text-center">
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-gray-400 mt-2">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      );
}

export default Home
