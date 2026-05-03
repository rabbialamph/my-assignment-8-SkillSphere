'use client'

import { signOut, useSession,  } from "@/lib/auth-client";
import NavLinks from "./NavLinks";
import Link from "next/link";
import { Avatar } from "@heroui/react";

const Navbar = () => {

  const {data} = useSession();

   const user = data?.user;

   const handleLogout = async () => {
     await signOut();  
    };



  return (
    <div className="navbar px-4 md:px-8 shadow-sm sticky top-0 z-50 bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#312e81] backdrop-blur-xl border-b border-white/10">


      <div className="navbar-start">

        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow">
            <NavLinks />
          </ul>
        </div>

        <Link href='/' className="text-lg md:text-xl font-bold text-white">
          SkillSphere
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">
          <NavLinks />
        </ul>
      </div>


      <div className="navbar-end">
        <div className="flex items-center gap-2 md:gap-3">



          {user ? (
            <>
              <Avatar>
                <Avatar.Image
                className="rounded-full h-10 w-10"
                alt="John Doe" 
                src={user?.image}
                referrerPolicy="no-referrer"
                 />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>

              <button 
              onClick={handleLogout}
              className=" cursor-pointer sm:block px-3 py-1.5 md:px-4 md:py-2 rounded-xl bg-red-600 text-white transition">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/auth/login"
                className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-xl border border-white/30 text-white hover:bg-white hover:text-black transition"
              >
                Login
              </Link>

              <Link
                href="/auth/register"
                className="px-3 py-1.5 md:px-4 md:py-2 text-sm md:text-base rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:scale-105 transition"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;