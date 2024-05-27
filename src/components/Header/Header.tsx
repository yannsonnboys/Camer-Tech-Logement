'use client';

import Link from "next/link";
import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useSession } from "next-auth/react";

import ThemeContext from "@/context/themeContext";
import Image from "next/image";


const Header = () => {
    const { darkTheme, setDarkTheme } = useContext(ThemeContext);

    const { data: session } = useSession();
    // console.log(session);

    return (
        <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap">
            <div className="flex items-center w-full md:2/3">
                <Link href="/" className="font-black text-tertiary-dark md:text-3xl" >
                    Camer-Tech Logement
                </Link>
                {/* <ul className="flex items-center ml-5">
                   <li className="flex items-center">
                       {session?.user ?
                            <Link href={`/users/${session.user.id}`}>
                                { session.user.image ? 
                                    (<div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image src={session.user.image} alt={session.user.name!} width={40} height={40}className="scale-animation img" />
                                    </div>) 
                                    : (<FaUserCircle className="cursor-pointer" />) 
                                }
                            </Link>
                         :
                            <Link href='/auth'>
                                <FaUserCircle className="cursor-pointer" />
                            </Link>
                        }
                   </li>
                   <li className='ml-2'>
                        { darkTheme 
                        ? (<MdOutlineLightMode className="cursor-pointer" onClick={() => {
                            setDarkTheme(false);
                            localStorage.removeItem('hotel-theme');
                        }}/>) 
                        : (<MdDarkMode className="cursor-pointer" onClick={() => {
                            setDarkTheme(true);
                            localStorage.setItem('hotel-theme', 'true');
                        }}/>)
                        }
                   </li>
                </ul> */}
            </div>

            <ul className="flex items-center justify-between w-full dm:w-1/3 mt-4">
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/'>Home</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/'>City</Link>
                </li>
                {/* <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/'>Apartments</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/'>Hotels</Link>
                </li> */}
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/rooms'>Rooms</Link>
                </li>
                <li className="hover:-translate-y-2 duration-500 transition-all">
                    <Link href='/'>Contact</Link>
                </li>
            </ul>
            <ul className="flex items-center ml-5 mt-5">
                   <li className="flex items-center">
                       {session?.user ?
                            <Link href={`/users/${session.user.id}`}>
                                { session.user.image ? 
                                    (<div className="w-10 h-10 rounded-full overflow-hidden">
                                        <Image src={session.user.image} alt={session.user.name!} width={40} height={40}className="scale-animation img" />
                                    </div>) 
                                    : (<FaUserCircle className="cursor-pointer" />) 
                                }
                            </Link>
                         :
                            <Link href='/auth'>
                                <FaUserCircle className="cursor-pointer" />
                            </Link>
                        }
                   </li>
                   <li className='ml-2'>
                        { darkTheme 
                        ? (<MdOutlineLightMode className="cursor-pointer" onClick={() => {
                            setDarkTheme(false);
                            localStorage.removeItem('hotel-theme');
                        }}/>) 
                        : (<MdDarkMode className="cursor-pointer" onClick={() => {
                            setDarkTheme(true);
                            localStorage.setItem('hotel-theme', 'true');
                        }}/>)
                        }
                   </li>
                </ul>
        </header>
    );
};

export default Header;