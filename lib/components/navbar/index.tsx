"use client";

import Link from "next/link";
import { Logo } from "../ui/svg-icon";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    name: "Home",
    href: "/",
    id: "home",
  },
  {
    name: "Ringtones",
    href: "/ringtones",
    id: "ringtones",
  },
  {
    name: "About",
    href: "/about",
    id: "about",
  },
  {
    name: "Contact",
    href: "/contact",
    id: "contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <nav className="backdrop-blur-xl bg-white/60  dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
          <Link href="/" onClick={()=>setOpen(false)} className="flex items-center">
            <Logo className="w-8 fill-black" />
          </Link>
          <div className="flex">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={() => setOpen(pre => !pre)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navlinks.map(({ name, href, id }) => (
                <li key={id}>
                  <Link
                    href={href}
                    className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      {/* mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-0 bottom-0 z-10 w-full h-full backdrop-blur-xl bg-white/60 grid place-content-center"
        >
          <ul className="text-center">
            {navlinks.map(({ name, href, id }) => (
              <li key={id}>
                <Link onClick={()=>setOpen(false)}
                  href={href}
                  className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
