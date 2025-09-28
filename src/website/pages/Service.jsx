import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHeartbeat, FaUserMd, FaStethoscope, FaAmbulance, FaHospital, FaFirstAid } from "react-icons/fa";



export default function Service() {

   const services = [
  {
    icon: <FaHeartbeat/>,
    title: "Cardiology",
    desc: "Advanced treatments for heart diseases with expert cardiologists.",
  },
  {
    icon: <FaUserMd  />,
    title: "Surgery",
    desc: "Modern surgical procedures with highly experienced doctors.",
  },
  {
    icon: <FaStethoscope />,
    title: "General Checkup",
    desc: "Comprehensive health checkups to keep you and your family healthy.",
  },
  {
    icon: <FaAmbulance />,
    title: "Emergency Care",
    desc: "24/7 emergency support with advanced facilities and quick response.",
  },
  {
    icon: <FaHospital/>,
    title: "Neurology",
    desc: "Expert care for brain, spine, and nervous system-related conditions.",
  },
  {
    icon: <FaFirstAid />,
    title: "First Aid",
    desc: "Immediate medical attention and first aid for urgent situations.",
  },
  {
    icon: <FaFirstAid />,
    title: "Normal Delivery",
    desc: "Immediate medical attention and first aid for urgent situations.",
  },
  {
    icon: <FaFirstAid/>,
    title: "maternity",
    desc: "Immediate medical attention and first aid for urgent situations.",
  },
  {
    icon: <FaFirstAid/>,
    title: "Ceaserean Delivery",
    desc: "Immediate medical attention and first aid for urgent situations.",
  },
];

    return (
        <>
            <section className="py-16 bg-gray-50" id="service">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our <span className="text-[#2fbca6]">Services</span>
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        We provide world-class healthcare services with modern facilities and expert doctors.
                    </p>

                    {/* Slider */}
                    <div className="mt-12">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            loop={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3500, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                            }}
                        >
                            {services.map((service, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white hover:bg-[#2fbca6] transition-all group border border-gray-200 shadow-lg rounded-xl p-8 flex flex-col items-center text-center hover:shadow-xl transition duration-300">
                                        <div className="bg-[#2fbca6] group-hover:bg-white w-20 h-20 flex items-center justify-center rounded-full mb-6">
                                           <span className="text-white text-4xl group-hover:text-[#2fbca6]">{service.icon}</span> 
                                        </div>
                                        <h3 className="text-xl group-hover:text-white transition-all font-semibold text-gray-800">{service.title}</h3>
                                        <p className="group-hover:text-white transition-all text-gray-500 text-sm mt-3">{service.desc}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </section>
        </>
    )
}
