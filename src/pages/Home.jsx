// ==============================
// src/components/Home.jsx
// ==============================
import React from "react";
import profileImg from "../assets/profile.jpg"; // your image path
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <section className="home min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start md:justify-between gap-8">
        
        {/* Image Section */}
        <div className="flex justify-center md:justify-start md:w-1/2">
          <img
            src={profileImg}
            alt="Harish R"
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-lg"
          />
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          {/* Name and Role */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Harish R
          </h1>
          <p className="text-xl md:text-2xl text-indigo-600 font-semibold">
            AI/ML Engineer
          </p>

          {/* Short Headline */}
          <p className="text-gray-600 mt-2 md:mt-4 text-lg md:text-xl">
            Experienced in building intelligent AI solutions and machine learning
            models that drive innovation and business growth.
          </p>

          {/* Social & Contact Links */}
          <div className="flex justify-center md:justify-start gap-4 mt-6">
            <a
              href="#get-in-touch"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
            >
              Get in Touch
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 text-2xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/yourlinkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 text-2xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
