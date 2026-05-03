export const metadata = {
  title: "Page Not Found",
  description: "404 error page not found",
};

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] text-white px-4 relative overflow-hidden">


      <div className="absolute w-[400px] h-[400px] bg-indigo-600/20 blur-[120px] rounded-full top-0 left-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600/20 blur-[120px] rounded-full bottom-0 right-0"></div>


      <div className="text-center max-w-xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-10 shadow-2xl relative z-10">

        <h1 className="text-8xl font-extrabold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
          404
        </h1>


        <h2 className="text-2xl font-semibold mt-4">
          Oops! Page Not Found
        </h2>

 
        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <div className="flex justify-center mt-8">

          <Link href="/">
            <button className="relative px-6 py-3 rounded-xl cursor-pointer overflow-hidden group">

              <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600"></span>

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-white/10 transition"></span>

              <span className="relative z-10">
                Go Home
              </span>

            </button>
          </Link>

        </div>

      </div>

    </div>
  );
};

export default NotFound;