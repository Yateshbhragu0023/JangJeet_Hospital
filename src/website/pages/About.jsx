import React from 'react'
import aboutImg from "../../assets/IMG/image18.webp"
import { motion } from "framer-motion"
import { FaCheck } from "react-icons/fa";

export default function About() {
  return (
    <>
      <section className="bg-white py-20" id='about'>
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <motion.img
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: false, amount: 0.3 }}
              src={aboutImg}
              alt="Hospital"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-3xl font-bold text-[#2fbca6] mb-4">
              About Our Hospital
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Jangjeet Hospital Dholpur is a leading Hospital located in Dholpur Rajasthan ,
              established in 2010. We specialize in General Surgery, Gynaecology,
              Obstetrics, and General Physician services.


            </p>
            <ul className="space-y-3">
              <li className="flex font-semibold items-start">
                <span className="text-[#2fbca6] font-bold mr-2"><FaCheck size={25}/></span>
                24/7 Emergency Support
              </li>
              <li className="flex font-semibold items-start">
                <span className="text-[#2fbca6] font-bold mr-2"><FaCheck size={25}/></span>
                Experienced & Specialized Doctors
              </li>
              <li className="flex font-semibold items-start">
                <span className="text-[#2fbca6] font-bold mr-2"><FaCheck size={25}/></span>
                Modern Diagnostic & Treatment Facilities
              </li>
            </ul>

            <button className="mt-6 px-6 py-2 bg-[#2fbca6] text-white rounded-md font-semibold hover:bg-[#28a091] transition">
              Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </>
  )
}
