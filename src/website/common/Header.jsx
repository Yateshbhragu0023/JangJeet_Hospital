import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";
import logo from "../../assets/IMG/logo.jpeg"
import { FaSearch } from "react-icons/fa";

export default function Header() {
    const [menu, setMenu] = useState(false)

    const menubar = [
        {
            id: 1,
            name: "Home",
            aTag: "#home"
        },
        {
            id: 2,
            name: "About",
            aTag: "#about"

        },
        {
            id: 3,
            name: "Service",
            aTag: "#service"

        },
        {
            id: 4,
            name: "Doctors",
            aTag: "#team"

        },
        {
            id: 5,
            name: "Gallery",
            aTag: "#gallery"

        },
        {
            id: 6,
            name: "Contact Us",
            aTag: "#contact"

        }

    ]

    return (
        <div className='bg-[#2fbca6]  w-full shadow-lg fixed top-0 left-0 z-50'>
            <div className='md:w-[85%] sm:w-[95%] bg-transparent w-[98%] mx-auto py-3 ' >
                <div className='flex justify-between'>
                    {/* logo */}
                    <div className='flex place-items-center'>
                        <a href="#home">
                            <img src={logo} alt="" className='w-24 rounded-full' />
                        </a>
                    </div>
                    {/* menubar */}
                    <ul className=' hidden md:flex justify-between font-semibold place-items-center gap-9 '>
                        {
                            menubar.map(
                                (d) => {
                                    return (
                                        <a href={d.aTag}>
                                            <li className='text-white hover:underline transition-all cursor-pointer'>
                                                {d.name}
                                            </li>
                                        </a>
                                    )
                                }
                            )
                        }
                        <li >
                            <h1 className='text-2xl text-white hover:text-[#28a091]'>
                                <FaSearch />
                            </h1>
                        </li>
                    </ul>
                    {/* mobile bar  */}
                    <div className='text-white font-bold pt-6 md:hidden block'>
                        <h1>
                            {
                                menu == false
                                    ?
                                    <HiBars3 size={32} onClick={() => setMenu(!menu)} />
                                    :
                                    <RxCross1 size={25} onClick={() => setMenu(!menu)} />
                            }
                        </h1>
                    </div>

                </div>
                {/* side menu */}
                <div className={`absolute top-[110px] right-0 ${menu ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}  w-[200px] h-screen  p-6 pt-10 bg-[#2fbca6]  transition-all duration-150`}>
                    <ul className='space-y-2'>
                        {
                            menubar.map(
                                (d) => {
                                    return (
                                        <li className='hover:text-[#28a091] text-white transition-all cursor-pointer'>
                                            {d.name}
                                        </li>
                                    )
                                }
                            )
                        }

                    </ul>

                </div>
            </div>
        </div>
    )
}
