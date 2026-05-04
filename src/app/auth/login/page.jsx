"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { toast } from "react-toastify";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const userData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: userData.email,
      password: userData.password,
      rememberMe: true,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message || "Login failed");
    } else {
      toast.success("Login successful");
    }

    console.log(data, error);
  };

  const GoogleHandleSignIn = async () =>{
    await authClient.signIn.social({
      provider: 'google'
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4 py-4 relative overflow-hidden">

      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-0 right-0"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center">
          Welcome Back
        </h2>

        <p className="text-center text-gray-400 text-sm mt-2 mb-6">
          Login to continue your learning journey
        </p>


        <Form onSubmit={onSubmit} className="space-y-5">


          <TextField
            isRequired
            type="email"
            validate={(value) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                return "Please enter a valid email address";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 text-sm">Email</Label>
            <Input
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />
            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>
          <TextField
            className="relative"
            isRequired
            minLength={8}
            type={isVisible ? "text" : "password"}
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }
              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }
              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }
              return null;
            }}
          >
            <Label className="text-gray-300 text-sm">Password</Label>

            <Input
              name="password"
              placeholder="Enter your password"
              className="w-full mt-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none focus:border-indigo-500 transition"
            />


            <Button
              type="button"
              onClick={() => setIsVisible(!isVisible)}
              className="absolute right-3 top-12 text-gray-400 hover:text-white transition"
            >
              {isVisible ? <BsEye size={18} /> : <BsEyeSlash size={18} />}
            </Button>

            <FieldError className="text-red-400 text-xs font-medium" />
          </TextField>

          <Button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-[1.02] transition font-semibold shadow-lg cursor-pointer"
          >
            Login
          </Button>
        </Form>


        <div className="flex items-center gap-3 my-6 text-gray-500 text-sm">
          <div className="flex-1 h-px bg-white/10"></div>
          OR
          <div className="flex-1 h-px bg-white/10"></div>
        </div>
        <div className="mb-4">
         <Button onClick={GoogleHandleSignIn} className="w-full cursor-pointer py-3 rounded-xl bg-white text-black hover:scale-[1.02] transition font-medium flex items-center justify-center gap-2">
           <FcGoogle size={22} />
           Login with Google
         </Button>
        </div>


        <p className="text-center text-sm text-gray-400">
          Don’t have an account?{" "}
          <Link href="/auth/register" className="text-indigo-400 hover:underline">
            Register
          </Link>
        </p>

      </motion.div>
    </div>
  );
};

export default LoginPage;