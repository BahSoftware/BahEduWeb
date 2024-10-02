"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page refresh

    // User credentials
    const userCredentials = {
      email,
      password,
    };

    try {
      // Send POST request to the API
      const response = await fetch("http://localhost:3001/login", {
        method: "POST", // Use POST method
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials), // Send user credentials
      });

      if (response.ok) {
        const data = await response.json(); // Get the response data
        alert("Giriş başarıyla gerçekleştirildi!"); // Success message
        // You can redirect or handle the response as needed
      } else {
        alert("Giriş sırasında bir hata oluştu."); // Error message
      }
    } catch (error) {
      console.error("Giriş hatası:", error);
      alert("Sunucu hatası."); // Server error message
    }
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="flex w-3/4 flex-col items-center md:flex-row shadow-2xl rounded-lg p-8">
        {/* Left Side - Illustration */}
        <div className="hidden md:flex md:w-1/2 justify-center items-center">
          <div className="relative w-full h-full">
            <Image
              src={"/images/register-image.png"}
              alt="Illustration"
              className="object-contain max-w-lg max-h-lg rounded-lg"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-full flex flex-col justify-center p-6 space-y-6">
          <h1 className="text-3xl text-center font-semibold text-red-600">
            Giriş Yap
          </h1>
          <form className="w-full space-y-4" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="@buyukanadolu.com.tr Uzantılı Mail Adresi veya Kullanıcı Adı"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update state
            />

            <input
              type="password"
              placeholder="Şifre"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update state
            />

            <div className="flex w-full space-x-4">
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Giriş Yap
              </button>
            </div>
            <div className="w-full text-center">
              <Link
                className="text-gray-900 opacity-70 hover:opacity-100"
                href={"/Register"}
              >
                Üye değil misin? Kayıt Ol!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
