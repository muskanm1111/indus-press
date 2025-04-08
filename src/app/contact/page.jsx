import Sitebanner from "@/components/sitebanner";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const Contact = () => {
  return (
    <>
      <Sitebanner title={"Contact Us"} />

      <div className="bg-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
          <div className="bg-gray-100 p-6 rounded">
            <Phone className="text-yellow-400 mx-auto mb-4" size={36} />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Call Us
            </h3>
            <p className="text-sm text-gray-600">Phone: +262 695 2601</p>
          </div>

          <div className="bg-gray-100 p-6 rounded">
            <MapPin className="text-yellow-400 mx-auto mb-4" size={36} />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              Address
            </h3>
            <p className="text-sm text-gray-600">121 King Street, Australia</p>
          </div>

          <div className="bg-gray-100 p-6 rounded">
            <Mail className="text-yellow-400 mx-auto mb-4" size={36} />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">Email</h3>
            <p className="text-sm text-gray-600">you@yourdomain.com</p>
          </div>
        </div>
      </div>

      <div className=" px-4 py-10 md:px-20 flex flex-col md:flex-row gap-10 bg-white">
        <div className="md:w-1/2 ">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Find Our Location
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>
        </div>

        <div className="md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Interested in discussing?
          </h2>
          <div className="w-16 h-1 bg-yellow-400 mb-6"></div>

          <form className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">
                  Name *
                </label>
                <input
                  type="text"
                  placeholder="Enter Name"
                  className="border border-gray-300 p-3 outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="border border-gray-300 p-3 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">
                  Subject *
                </label>
                <input
                  type="text"
                  placeholder="Enter Subject"
                  className="border border-gray-300 p-3 outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <label className="text-sm font-medium text-gray-700">
                  Phone
                </label>
                <input
                  type="text"
                  placeholder="Enter Phone"
                  className="border border-gray-300 p-3 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                placeholder="Enter Message"
                rows="4"
                className="border border-gray-300 p-3 outline-none resize-none"
              ></textarea>
            </div>

            <div className="flex gap-4 mt-2">
              <button
                type="submit"
                className="bg-yellow-400 text-white px-6 py-2 text-sm hover:bg-yellow-500 transition"
              >
                Send your message
              </button>
              <button
                type="reset"
                className="border border-yellow-400 text-yellow-500 px-6 py-2 text-sm hover:bg-yellow-100 transition"
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
