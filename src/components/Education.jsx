import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { works1 } from "../data/Static";

const Work = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <div name="education" className="w-full bg-gradient-to-l from-[#21073C] to-[#3A1078] py-32">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center  h-full text-white">
        <div>
          <h1 className="text-4xl font-bold inline border-b-4 border-[#00FFCA]">Education and Certification</h1>
          <p className="text-xl py-6"></p>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 mt-7">
          {/* Map over the works array and render each work */}
          {works1.map((education) => (
            <a
              href={education.workUrl}
              target="_blank"
              rel="noreferrer"
              className="bg-slate-200 rounded-lg overflow-hidden"
              key={education.title} data-aos="fade-up" data-aos-duration={education.duration} data-aos-easing="linear"
            >
              {/* Work image */}
              <img
                src={education.imgUrl}
                alt="education"
                className="w-full h-36 md:h-48 object-cover"
              />
              {/* Work details */}
              <div className="w-full p-5 text-black">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {education.title}
                </h3>
                {/* Technologies */}
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm ">
                  {education.tech.map((item) => (
                    <span
                      key={item}
                      className="inline-block px-2 py-1 bg-slate-300 rounded-md"
                    >
                      {item}
                    </span>
                  ))}
                </p>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {education.title1}
                </h3>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {education.title2}
                </h3>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {education.title3}
                </h3>
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
                  {education.title4}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;