"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [selected, setSelected] = useState("Home");
  const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown state

  const handleClick = (item) => {
    setSelected(item); // Set clicked item as selected
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle dropdown
  };

  const getHref = (item) => {
    return item === "Home" ? "/" : `/${item}`;
  };

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          href={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src={"/images/bah-logo.png"}
            width={64}
            height={64}
            alt="Buyuk Anadolu Hastanesi Logo"
            className="rounded-full"
          />
          <h1 className="text-3xl font-black">Büyük Anadolu Hastaneleri</h1>
        </Link>
        <div className="flex w-full md:block md:w-auto" id="navbar-default">
          <div className="flex items-center space-x-4 md:space-x-8">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              {["Ana Sayfa", "Hakkımızda", "Özellikler"].map((item) => (
                <li key={item}>
                  <Link
                    href={getHref(item)}
                    onClick={() => handleClick(item)}
                    className={`block py-2 px-3 text-gray-900 rounded ${
                      selected === item
                        ? "text-red-700 opacity-100"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="relative">
              <button
                onClick={toggleDropdown} // Dropdown açma/kapatma işlevi
                type="button"
                className="inline-flex items-center rounded-lg justify-center p-2 text-base font-medium leading-none opacity-70 text-red-600"
              >
                <svg
                  className="w-5 h-5 me-1 text-red-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                Hesabım
                <svg
                  className="w-4 h-4 text-red-600 ms-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 9-7 7-7-7"
                  />
                </svg>
              </button>

              {dropdownOpen && ( // Dropdown menüsünü göster/gizle
                <div className="absolute top-full left-0 z-10 mt-2 w-44 divide-y divide-gray-100 overflow-hidden rounded-lg bg-white shadow">
                  <ul className="p-2 text-start text-sm font-medium text-gray-900">
                    <li>
                    <Link
                        href="/login"
                        className="flex justify-between items-center px-4 py-2 text-gray-900 opacity-70 hover:opacity-100"
                      >
                        Kayıt Ol
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={10}
                          viewBox="0 0 20 18"
                          fill="none"
                        >
                          <path
                            d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 8.53662H19"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/login"
                        className="flex justify-between items-center px-4 py-2 text-gray-900 opacity-70 hover:opacity-100"
                      >
                        Giriş Yap
                        <svg
                          className="ml-3 lg:ml-6"
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={10}
                          viewBox="0 0 20 18"
                          fill="none"
                        >
                          <path
                            d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M1 8.53662H19"
                            stroke="#111827"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
