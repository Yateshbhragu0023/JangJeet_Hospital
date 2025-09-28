import React from 'react'
import { motion } from "framer-motion"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";


export default function Contact() {

  const handleBook = (e) => {
    e.preventDefault()
    console.log(e)
    const name = e.target.name.value ;
    const email = e.target.email.value ;
    const phone = e.target.phone.value ;
    const date = e.target.date.value ;
    const service = e.target.service.value ;
    const message = e.target.message.value ;

    if(name && email && phone && date && service && message){
      alert("Your Inquiry Has been Submitted , We will connect You Soon")
      e.target.reset()
    }else{
      alert("All Fields Are Required")
    }

  }

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
            Book an Appointment
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-white p-8 shadow-lg rounded-xl">
              <h3 className="text-2xl font-semibold mb-6 text-gray-700">
                Appointment Form
              </h3>
              <form className="space-y-4" onSubmit={handleBook}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name='name'
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fbca6]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    name='email'
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fbca6]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    name='phone'
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fbca6]"
                  />
                  <input
                    type="date"
                    name='date'
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fbca6]"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4" id='contact'>
                  <select name='service' className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#2fbca6] focus:outline-none outline-none">
                    <option >Select Serviice</option>
                    <option>Delivery </option>
                    <option>Surgery</option>
                    <option>General CheckUp</option>
                    <option>Maternity</option>
                  </select>
                </div>
                <textarea
                  rows="4"
                  placeholder="Message"
                  name='message'
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#2fbca6]"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#2fbca6] text-white font-semibold py-3 rounded-lg hover:bg-[#249c89] transition-all"
                >
                  Book Appointment
                </button>
              </form>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              className="bg-[#2fbca6] text-white p-8 shadow-lg rounded-xl flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4">
                  <FaMapMarkerAlt size={22} />
                  <span>Kotla City, Dholpur Rajsthan , 328001</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaPhoneAlt size={22} />
                  <span> +91 9314180633</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaEnvelope size={22} />
                  <span>rgrambopatel153@gmail.com</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaRegClock size={22} />
                  <span>Mon - Sat: 8:00 AM - 8:00 PM</span>
                  <span>24*7 Support Available</span>
                </li>
                <li className="flex items-center gap-4">
                  <FaPeopleGroup size={22} />
                  <span>24*7 Support Available</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
