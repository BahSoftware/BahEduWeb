"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Register() {
  // State'ler
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [hospital, setHospital] = useState("");

  // Form submit fonksiyonu
  const handleSubmit = async (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engelle

    // Kullanıcı verileri
    const newUser = {
      name,
      surName,
      email,
      phone,
      password,
      department,
      hospital,
    };

    try {
      // API'ye POST isteği at
      const response = await fetch("http://localhost:3001/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        alert("Kullanıcı başarıyla kaydedildi!");
      } else {
        alert("Kayıt sırasında bir hata oluştu.");
      }
    } catch (error) {
      console.error("Kayıt hatası:", error);
      alert("Sunucu hatası.");
    }
  };

  return (
    <div className="mt-20 flex flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center md:flex-row shadow-2xl rounded-lg p-8">
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
        <div className="w-full md:w-1/2 flex flex-col justify-center p-6 space-y-6">
          <h1 className="text-3xl text-center font-semibold text-red-600">
            Kayıt Ol
          </h1>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Ad"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
              <input
                type="text"
                placeholder="Soyad"
                value={surName}
                onChange={(e) => setSurName(e.target.value)}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
              />
            </div>
            <input
              type="email"
              placeholder="@buyukanadolu.com.tr Uzantılı Mail Adresi"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="tel"
              placeholder="Telefon Numarası"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="password"
              placeholder="Şifre"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Departman"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <input
              type="text"
              placeholder="Hastane"
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <div className="flex w-full space-x-4">
              <button
                type="submit"
                className="w-full py-3 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Kayıt Ol
              </button>
            </div>
            <div className="w-full text-center">
              <Link
                className="text-gray-900 opacity-70 hover:opacity-100"
                href={"/Login"}
              >
                Üye misin? Giriş yap!
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
