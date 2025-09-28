import React, { useState } from 'react'
import { RxCross1 } from "react-icons/rx";

import img1 from "../../assets/IMG/image1.jpeg"
import img16 from "../../assets/IMG/image16.jpeg"
import img3 from "../../assets/IMG/image3.jpeg"
import img4 from "../../assets/IMG/image4.jpeg"
import img5 from "../../assets/IMG/image5.jpeg"
import img6 from "../../assets/IMG/image6.jpeg"
import img7 from "../../assets/IMG/image7.jpeg"
import img8 from "../../assets/IMG/image8.jpeg"
import img9 from "../../assets/IMG/image9.jpeg"
import img10 from "../../assets/IMG/image11.jpeg"
import img11 from "../../assets/IMG/image11.jpeg"
import img12 from "../../assets/IMG/image12.jpeg"
import img13 from "../../assets/IMG/image13.jpeg"
import img14 from "../../assets/IMG/image14.jpeg"
import img15 from "../../assets/IMG/image15.jpeg"



export default function Gallery() {

    const [selectedImage, setSelectedImage] = useState(null);

    const GalleryImages = [
        img1, img16, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15,
    ]
    console.log(GalleryImages)


    return (
        <>
            <section className="py-12 bg-gray-50" id='gallery'>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
                        Our <span className='text-[#2fbca6]'>Hospital</span> Gallery
                    </h2>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {GalleryImages.map((img, index) => (
                            <div
                                key={index}
                                className="overflow-hidden rounded-xl shadow-md cursor-pointer group"
                                onClick={() => setSelectedImage(img)}
                            >
                                <img
                                    src={img}
                                    alt={`Gallery ${index + 1}`}
                                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Popup Modal */}
                {selectedImage && (
                    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
                        <div className="relative max-w-4xl w-full">
                            <button
                                className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                                onClick={() => setSelectedImage(null)}
                            >
                                <RxCross1 className="w-6 h-6 text-black" />
                            </button>
                            <img
                                src={selectedImage}
                                alt="Selected"
                                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                )}
            </section>
        </>
    )
}
