import {
  Earth,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="px-10 md:px-20 bg-[#020f13]">
        <div className=" grid grid-cols-1 md:grid-cols-3 py-14 gap-5">
          <div>
            <img src="/logo-wide.webp" className="w-60 md:w-72"></img>
            <h1 className="text-white mt-5">
              203, Envato Labs, Behind Alis Steet, <br />
              Melbourne, Australia.
            </h1>
            <span className="flex items-center gap-2 text-yellow-400 mt-4">
              <Phone size={15} />
              <span className="text-white">123456789</span>
            </span>
            <span className="flex items-center gap-2 text-yellow-400 mt-1">
              <Mail size={15} />
              <span className="text-white">desirediv003@gmail.com</span>
            </span>
            <span className="flex items-center gap-2 text-yellow-400 mt-1">
              <Earth size={15} />
              <span className="text-white">https://desirediv.com/</span>
            </span>
            <div className="flex gap-2 mt-2">
              <Facebook size={15} className="text-white" />
              <Twitter size={15} className="text-white" />
              <Instagram size={15} className="text-white" />
              <Linkedin size={15} className="text-white" />
            </div>
          </div>
          <div>
            <h1 className="text-white mt-2 text-xl ">Quicks Contacts</h1>
            <ul className="flex flex-col flex-wrap justify-center gap-6 text-sm font-semibold mt-4">
              <Link
                href={"/"}
                className="hover:text-yellow-500 transition text-white"
              >
                Home
              </Link>
              <Link
                href={"services"}
                className="hover:text-yellow-500 transition text-white"
              >
                Services
              </Link>
              <Link
                href={"about"}
                className="hover:text-yellow-500 transition text-white"
              >
                About
              </Link>
              <Link
                href={"contact"}
                className="hover:text-yellow-500 transition text-white"
              >
                Contact
              </Link>
            </ul>
          </div>
          <div>
            <h1 className="text-xl text-white ">Useful Links</h1>
            <div className="bg-[#020f13] flex items-center justify-center mt-3">
              <form className="w-full max-w-md space-y-3">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full bg-transparent border border-gray-500 text-white p-3 placeholder-gray-400 outline-none"
                />
                <textarea
                  placeholder="Enter Message"
                  rows="2"
                  className="w-full bg-transparent border border-gray-500 text-white p-3 placeholder-gray-400 outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="border border-gray-500 text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <hr className="bg-white"></hr>
        <h1 className="text-white text-center py-2">
          Copyright ©2016 ThemeMascot. All Rights Reserved
        </h1>
      </div>
    </>
  );
};

export default Footer;
