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
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Büyük Anadolu Hastanesi
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
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
            <button
              onClick={toggleDropdown} // Dropdown açma/kapatma işlevi
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 text-sm font-medium leading-none text-gray-900"
            >
              <svg
                className="w-5 h-5 me-1"
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
              Account
              <svg
                className="w-4 h-4 text-gray-900 ms-1"
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
              <div
                className="z-10 w-56 divide-y divide-gray-100 overflow-hidden overflow-y-auto rounded-lg bg-white antialiased shadow"
              >
                <ul className="p-2 text-start text-sm font-medium text-gray-900 dark:text-white">
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                    >
                      My Account
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                    >
                      My Orders
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                    >
                      Favourites
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                    >
                      Delivery Addresses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                    >
                      Billing Data
                    </a>
                  </li>
                </ul>

                <div className="p-2 text-sm font-medium text-gray-900">
                  <a
                    href="#"
                    className="inline-flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
