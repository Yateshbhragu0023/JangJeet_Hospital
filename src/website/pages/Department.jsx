import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaHeartbeat, FaClipboardList, FaUserMd, FaFirstAid } from "react-icons/fa";


export default function Department() {

    const departments = [
        {
            icon: <FaHeartbeat className="text-4xl text-white" />,
            title: "Cardiology",
            desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
        },
        {
            icon: <FaClipboardList className="text-4xl text-white" />,
            title: "Diagnosis",
            desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
        },
        {
            icon: <FaUserMd className="text-4xl text-white" />,
            title: "Surgery",
            desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
        },
        {
            icon: <FaFirstAid className="text-4xl text-white" />,
            title: "Maternity",
            desc: "Fact that a reader will be distracted by the readable page when looking at its layout.",
        },
    ];

    return (
        <>
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
                        Our <span className="text-[#2FBCA6]">Departments</span>
                    </h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
                        Aigeneros sunt consectetur impedit nulla molestiae delectus repellat
                        laborum dolores doloremque accusantium.
                    </p>

                    {/* Services Grid */}
                    {/* Slider */}
                    <div className="mt-12">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            spaceBetween={30}
                            slidesPerView={1}
                            navigation
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                640: { slidesPerView: 2 },
                                1024: { slidesPerView: 3 },
                                1280: { slidesPerView: 4 },
                            }}
                        >
                            {departments.map((dept, index) => (
                                <SwiperSlide key={index}>
                                    <div className="bg-white border border-gray-200 shadow-md rounded-lg p-6 hover:shadow-xl transition">
                                        <div className="flex justify-center">
                                            <div className="bg-[#2fbca6]   w-20 h-20 flex items-center justify-center rounded-full mb-6">
                                                {dept.icon}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800">{dept.title}</h3>
                                        <p className="text-gray-500 text-sm mt-2">{dept.desc}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    {/* Button */}
                    <div className="mt-10">
                        <button className="bg-[#2fbca6] text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-[#28a091] transition">
                            View All
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
