import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-gray-300">

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8">


        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
             SkillSphere
          </h2>
          <p className="text-sm text-gray-400">
            Upgrade your skills with world-class courses and industry experts.
          </p>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <div className="flex flex-col gap-2 text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/courses" className="hover:text-white transition">Courses</Link>
            <Link href="/profile" className="hover:text-white transition">My Profile</Link>
            <Link href="/" className="hover:text-white transition">Privacy policy</Link>
            <Link href="/" className="hover:text-white transition">Terms & Conditions</Link>
          </div>
        </div>


        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <p className="text-sm text-gray-400">Email: support@skillsphere.com</p>
          <p className="text-sm text-gray-400">Phone: +880 1234 567 890</p>


           <div className="flex gap-4 mt-4">
             

             <Link href="https://www.linkedin.com/in/rabbialam-webdeveloper" target="_blank">
               <span className="group w-10 h-10 flex items-center justify-center rounded-full 
               bg-white/10 text-white backdrop-blur-md border border-white/20
               transition-all duration-300 ease-in-out
               hover:bg-[#0A66C2] hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#0A66C2]/40">
                 
                 <FaLinkedinIn className="transition-transform duration-300 group-hover:rotate-6" />
               </span>
             </Link>
       

             <Link href="https://web.facebook.com/rabbialambd" target="_blank">
               <span className="group w-10 h-10 flex items-center justify-center rounded-full 
               bg-white/10 text-white backdrop-blur-md border border-white/20
               transition-all duration-300 ease-in-out
               hover:bg-[#1877F2] hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#1877F2]/40">
                 
                 <FaFacebookF className="transition-transform duration-300 group-hover:rotate-6" />
               </span>
             </Link>
       

             <Link href="https://github.com/rabbialamph" target="_blank">
               <span className="group w-10 h-10 flex items-center justify-center rounded-full 
               bg-white/10 text-white backdrop-blur-md border border-white/20
               transition-all duration-300 ease-in-out
               hover:bg-black hover:text-white hover:scale-110 hover:-translate-y-1 hover:shadow-lg hover:shadow-gray-500/40">
                 
                 <FaGithub className="transition-transform duration-300 group-hover:rotate-6" />
               </span>
             </Link>
       
           </div>

        </div>

      </div>


      <div className="border-t border-white/10 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} SkillSphere. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;