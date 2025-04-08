import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-black flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-2 gap-2">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-sm text-white items-center">
          <span className="flex items-center gap-2 text-yellow-400">
            <Phone size={15} />
            <span className="text-white">123456789</span>
          </span>
          <span className="flex items-center gap-2 text-yellow-400">
            <Mail size={15} />
            <span className="text-white">desirediv003@gmail.com</span>
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <Facebook size={15} className="text-white" />
            <Twitter size={15} className="text-white" />
            <Instagram size={15} className="text-white" />
            <Linkedin size={15} className="text-white" />
          </div>
          <button className="bg-yellow-400 text-white w-28 h-7 text-xs text-center rounded-sm hover:bg-yellow-500">
            Get A Quote Now
          </button>
        </div>
      </div>

      <div className="bg-white flex flex-col lg:flex-row items-center justify-between  px-6 md:px-20 py-4 gap-6">
        <div>
          <img src="/logo-wide.webp" className="w-60 md:w-72" alt="Logo" />
        </div>

        <ul className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-black">
          <Link href={"/"} className="hover:text-yellow-500 transition">
            Home
          </Link>
          <Link href={"services"} className="hover:text-yellow-500 transition">
            Services
          </Link>
          <Link href={"about"} className="hover:text-yellow-500 transition">
            About
          </Link>
          <Link href={"contact"} className="hover:text-yellow-500 transition">
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
};

export default Header;
