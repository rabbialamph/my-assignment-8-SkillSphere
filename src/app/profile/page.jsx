'use client'
import { useSession } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";

const page = () => {
    const { data } = useSession();
    const user = data?.user;
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4 py-4 overflow-hidden">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10"
      >

        <h2 className="text-3xl font-bold text-center">
          My Profile
        </h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-6">
          Manage your profile information
        </p>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-6">

          <div className="flex flex-col md:flex-row items-center gap-5 text-center md:text-left">

             <Avatar>
               <Avatar.Image
               className="rounded-full h-24 w-24"
               alt={user?.name} 
               src={user?.image}
               referrerPolicy="no-referrer"
                />
               <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
             </Avatar>

            <div className="space-y-1">
              <h2 className="font-semibold text-xl">{user?.name}</h2>
              <p className="text-gray-400 text-sm">{user?.email}</p>

              <span className="inline-block bg-indigo-500/20 text-indigo-300 text-xs px-3 py-1 rounded-full mt-1">
                Student
              </span>
            </div>

          </div>


          <div className="flex justify-between mt-8 text-center text-sm text-gray-400">

            <p>
              Courses <br />
              <span className="text-white font-semibold">12</span>
            </p>

            <div className="border-x border-white/10 px-6 md:px-12">
              Completed <br />
              <span className="text-white font-semibold">6</span>
            </div>

            <p>
              Certificates <br />
              <span className="text-white font-semibold">4</span>
            </p>

          </div>
        </div>


        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mt-5">

          <h3 className="font-semibold text-lg mb-2">About Me</h3>

          <p className="text-gray-400 text-sm leading-relaxed">
            A hardworking student who studies regularly and tries his best to achieve his goals. Completing work on time and maintaining discipline is his main characteristic.
          </p>

          <div className="mt-5 text-sm">
            <p className="text-gray-400">Joined</p>
            <p className="text-white font-semibold">2025</p>
          </div>


          <Link href="/profile/update">
            <button className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] transition font-semibold shadow-lg cursor-pointer">
              Update Profile Information
            </button>
          </Link>

        </div>

      </motion.div>
    </div>
  );
};

export default page;