import React from 'react'
import doctorIMG from "../../assets/IMG/hour_healthbg.png"
import Header from '../common/Header'
import { motion } from "framer-motion"

export default function Hero() {

  const bg = {
    backgroundImage: `url(${doctorIMG})`,  // ✅ correct
    backgroundPosition: "right center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain" // optional, makes it fill
  }
  return (
    <>

      <section style={bg} id="home" className="mt-20 relative w-full h-screen flex items-center justify-center  overflow-hidden">
        {/* Background Shape */}


        {/* Hero Content */}
        <div className="relative bg-gradient-to-r from-[#2fbca6]/90 to-white/10 h-screen w-full z-10  mx-auto px-6 lg:px-32 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-white space-y-6">
            <h1 className="text-sm md:text-lg font-semibold bg-[#28a091] w-48 rounded-lg p-2 leading-tight">
              JANGJEET HOSPITAL
            </h1>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              WE PROVIDE BEST <br /> HEALTHCARE
            </h1>
            <h1 className="text-xl md:text-2xl font-semibold leading-tight">
              Best Service in Dholpur
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-lg">
              Expedita error amet tempora blanditiis laudantium. Laborum saepe
              magni fugiat hic? Fuga illo aliquid error magni doloremque.
            </p>
            <button className="px-6 py-3 bg-white text-[#2fbca6] font-semibold rounded shadow-md hover:bg-[#28a091] hover:text-white transition-all">
              Read More
            </button>
          </motion.div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">

          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3">
          <span className="w-3 h-3 bg-white rounded-full"></span>
          <span className="w-3 h-3 bg-white/60 rounded-full"></span>
          <span className="w-3 h-3 bg-white/60 rounded-full"></span>
        </div>
      </section>
    </>
  )
}
