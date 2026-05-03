"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path) => {
    return path === "/"
      ? pathname === "/"
      : pathname.startsWith(path);
  };


  const Links = [
        { name: "Home", path: "/" },
        { name: "Courses", path: "/courses" },
        { name: "My Profile", path: "/profile" },
      ]

  return (
    <ul className="flex flex-col lg:flex-row gap-4 text-white">
      {Links.map((item) => (
        <li key={item.path}>
          <Link
            href={item.path}
            className="relative px-3 py-2 group transition duration-300"
          >
            {item.name}

            <span
              className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-indigo-500 to-purple-600 
              transition-transform duration-300 origin-left
              ${
                isActive(item.path)
                  ? "scale-x-100"
                  : "scale-x-0 group-hover:scale-x-100"
              }`}
            ></span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;