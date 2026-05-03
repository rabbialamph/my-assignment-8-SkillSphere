'use client'

import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiLeftArrowAlt } from "react-icons/bi";
import { toast } from "react-toastify";

const MyProfile = () => {
  const router = useRouter();
  const onSubmit = async (e) =>{
     e.preventDefault()
     const name = e.target.name.value;
     const image = e.target.image.value;

    const {error} = await authClient.updateUser({
      name,
      image
     })
      if (error) {
      toast.error("Update failed");
    } else {
      toast.success("Profile Updated Successfully");

      router.push("/profile");
    }
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4 relative overflow-hidden">


      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-0 right-0"></div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10"
      >


        <h2 className="text-3xl font-bold text-center">
          Update Profile
        </h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-6">
          Update your personal information
        </p>
       
        <Form onSubmit={onSubmit} className="space-y-5">

          <TextField
            isRequired
            validate={(value) => {
              if (value.length < 3) {
                return "Name must be at least 3 characters";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 text-sm">Name</Label>
            <Input
              name="name"
              placeholder="Enter your name"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />
            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>

          <TextField
          isRequired
          >
            <Label className="text-gray-300 text-sm">Photo URL</Label>
            <Input
             
              name="image"
              type="text"
              placeholder="Enter image URL"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />
          </TextField>


        <Button
   
           type="submit"
           className="w-full mt-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] transition font-semibold shadow-lg cursor-pointer"
        >
         Save Change
        </Button>

        </Form>

        <div className="flex justify-center mt-6">
          <Link
            href="/profile"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition text-sm"
          >
            <BiLeftArrowAlt />
            Back to profile
          </Link>
        </div>

      </motion.div>
    </div>
  );
};

export default MyProfile;