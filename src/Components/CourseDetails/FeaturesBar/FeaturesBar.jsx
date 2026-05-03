import { BiAward, BiBookOpen, BiUser } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";

const FeaturesBar = () => {
  const features = [
    {
      icon: <BiBookOpen size={22} />,
      title: "Flexible Learning",
      desc: "Learn at your own pace anywhere.",
    },
    {
      icon: <BiUser size={22} />,
      title: "Expert Instructors",
      desc: "Learn from industry professionals.",
    },
    {
      icon: <FaClipboardList size={22} />,
      title: "Practical Projects",
      desc: "Build real-world projects for your portfolio.",
    },
    {
      icon: <BiAward size={22} />,
      title: "Certification",
      desc: "Earn certificates and boost your career.",
    },
  ];

  return (
    <div className="mt-10 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-xl text-white relative overflow-hidden">

  
      <div className="absolute w-[300px] h-[300px] bg-indigo-500/20 blur-3xl rounded-full top-0 left-0"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl hover:bg-white/10 transition group"
          >

    
            <div className="bg-white/10 border border-white/10 p-3 rounded-xl backdrop-blur-md group-hover:scale-110 transition">
              <span className="text-indigo-400">
                {item.icon}
              </span>
            </div>


            <div>
              <h3 className="font-semibold text-white group-hover:text-indigo-400 transition">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mt-1">
                {item.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
};

export default FeaturesBar;