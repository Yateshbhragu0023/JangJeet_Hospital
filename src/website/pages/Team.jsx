import React from 'react'
import doctorImg from "../../assets/IMG/RambilasIMG.webp"

export default function Team() {

  const doctors = [
    {
      name: "Rambilash ",
      role: "Doctor",
      img: doctorImg,
    },
    {
      name: "Adam View",
      role: "Doctor",
      img: doctorImg,
    },
    {
      name: "Mia Mike",
      role: "Doctor",
      img: doctorImg,
    },
  ];

  return (
    <>
      <section className="bg-[#2fbca6] py-16" id='team'>
        <div className="container mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white">OUR DOCTORS</h2>
            <p className="text-white mt-3 max-w-2xl mx-auto">
              Meet our team of highly qualified and experienced doctors committed
              to providing the best healthcare and patient support.
            </p>
          </div>

          {/* Doctors Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {doctors.map((doc, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition"
              >
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-76 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold">{doc.name}</h3>
                  <p className="text-gray-600">{doc.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-10">
            <button className="bg-white text-[#2fbca6] hover:bg-[#2fbca6] hover:text-white  px-6 py-2 font-semibold rounded-md shadow  transition-all">
              View All
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
