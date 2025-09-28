import React, { useEffect } from 'react'

export default function InfiniteSlider() {

    const items = [
        "Emergency ",
        "Nuerology",
        "Maternity",
        "Surgery",
        "Delivery",
        "Cardeology",
    ];

    return (
        <>
            <div className="w-full bg-[#2fbca6] overflow-hidden py-6">
                <div className="flex gap-16 animate-scroll whitespace-nowrap">
                    {/* duplicate 2 times for infinite effect */}
                    {[...items, ...items].map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 text-white text-xl font-semibold"
                        >
                            <span>{item}</span>
                            <span className="text-[#28a091] text-2xl">✦</span>
                        </div>
                    ))}
                </div>

                {/* animation style */}
                <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 15s linear infinite;
        }
      `}</style>
            </div>
        </>
    )
}
