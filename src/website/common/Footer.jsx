import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#2fbca6] text-white pb-8 pt-16">
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* About Section */}
          <div>
            <h2 className="text-xl font-bold mb-4">JANGJEET Hospital</h2>
            <p className="text-sm leading-relaxed">
              Providing world-class healthcare with advanced medical technology,
              compassionate doctors, and trusted care for your family’s health and
              well-being.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-bold mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:underline">About Us</a></li>
              <li><a href="#service" className="hover:underline">Services</a></li>
              <li><a href="#team" className="hover:underline">Doctors</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="text-xl font-bold mb-4">Our Services</h2>
            <ul className="space-y-2 text-sm">
              <li>Emergency Care</li>
              <li>Cardiology</li>
              <li>Neurology</li>
              <li>Orthopedics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-sm">Kotla City, Dholpur Rajsthan</p>
            <p className="text-sm mt-2">Phone: +91 9314180633</p>
            <p className="text-sm">Email: rgrambopatel153@gmail.com</p>

            {/* Social Media */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="p-2 bg-white text-[#2fbca6] rounded-full hover:bg-gray-100">
                <FaFacebookF />
              </a>
              <a href="#" className="p-2 bg-white text-[#2fbca6] rounded-full hover:bg-gray-100">
                <FaTwitter />
              </a>
              <a href="#" className="p-2 bg-white text-[#2fbca6] rounded-full hover:bg-gray-100">
                <FaLinkedinIn />
              </a>
              <a href="#" className="p-2 bg-white text-[#2fbca6] rounded-full hover:bg-gray-100">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/30 pt-6 text-center text-sm">
          © {new Date().getFullYear()} JangJeet Hospital. All rights reserved. <br />
           Crafted By Web TH Agency
          <div onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='z-[999] fixed md:bottom-5 sm:bottom-4 bottom-2 md:right-10 sm:right-4 right-2 bg-[#28a091] md:p-4 sm:p-3 p-2 text-white text-xl rounded-full' >
            <FaChevronUp />
          </div>
        </div>
      </footer>
    </>
  )
}
