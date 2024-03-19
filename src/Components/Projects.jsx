import React from "react";
import p1img from "./assets/portimg.png";
import portimg from "./assets/WebPort.png";
import backimg2 from "./assets/backgray.png";

const Projects = () => {
  return (
    <div id="3">
      <div
        className="flex items-center justify-center "
        style={{
          backgroundImage: `url(${backimg2})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className=" text-white min-h-screen mt-5">
          <div className=" mb-3">
            <h1 className=" font-black text-5xl text-center py-2">
              <span className=" tracking-widest">PROJECTS</span>
            </h1>
            <p className=" w-[80%] md:w-[700px] mx-auto font-medium text-center py-4 ">
              Here you will find some of the personal and clients projects that
              I created with each project containing its own case study
            </p>
          </div>

          <div className="max-w-[1240px] mx-auto grid   lg:grid-cols-3 gap-9">

            <div className="w-[400px] m-4 mt-2 mx-auto flex flex-col justify-between border-2 border-gray-600 bg-black bg-opacity-55  rounded-lg hover:scale-105 duration-300">
              <div>
                <img src={portimg} alt="/" className=" w-[500px] mt-6 " />
              </div>
              <div className="mx-auto flex flex-col w-[400px] mt-2">
                <h1 className=" font-bold text-center text-2xl py-4 tracking-wider">
                  Portfolio website
                </h1>
                <button className="w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg hover:scale-110 duration-200 hover:text-zinc-900 hover:bg-neutral-400 ">
                  <a href="https://github.com/maxfury08/portfolio"> GitHub Link </a>
                </button>
              </div>
            </div>

            <div className="w-[400px] m-4 mt-2 mx-auto flex flex-col justify-between border-2 border-gray-600 bg-black bg-opacity-55  rounded-lg hover:scale-105 duration-300">
              <div>
                <img src={portimg} alt="/" className=" w-[500px] mt-6 " />
              </div>
              <div className="mx-auto flex flex-col w-[400px] mt-2">
                <h1 className=" font-bold text-center text-2xl py-4 tracking-wider">
                  Portfolio website
                </h1>
                <button className="w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg hover:scale-110 duration-200 hover:text-zinc-900 hover:bg-neutral-400 ">
                  <a href="https://github.com/maxfury08/portfolio"> GitHub Link </a>
                </button>
              </div>
            </div>

            <div className="w-[400px] m-4 mt-2 mx-auto flex flex-col justify-between border-2 border-gray-600 bg-black bg-opacity-55  rounded-lg hover:scale-105 duration-300">
              <div>
                <img src={portimg} alt="/" className=" w-[500px] mt-6 " />
              </div>
              <div className="mx-auto flex flex-col w-[400px] mt-2">
                <h1 className=" font-bold text-center text-2xl py-4 tracking-wider">
                  Portfolio website
                </h1>
                <button className="w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg hover:scale-110 duration-200 hover:text-zinc-900 hover:bg-neutral-400 ">
                  <a href="https://github.com/maxfury08/portfolio"> GitHub Link </a>
                </button>
              </div>
            </div>

            <div className="w-[400px] m-4 mt-2 mx-auto flex flex-col justify-between border-2 border-gray-600 bg-black bg-opacity-55  rounded-lg hover:scale-105 duration-300">
              <div>
                <img src={portimg} alt="/" className=" w-[500px] mt-6 " />
              </div>
              <div className="mx-auto flex flex-col w-[400px] mt-2">
                <h1 className=" font-bold text-center text-2xl py-4 tracking-wider">
                  Portfolio website
                </h1>
                <button className="w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg hover:scale-110 duration-200 hover:text-zinc-900 hover:bg-neutral-400 ">
                  <a href="https://github.com/maxfury08/portfolio"> GitHub Link </a>
                </button>
              </div>
            </div>
            
            <div className="w-[400px] m-4 mt-2 mx-auto flex flex-col justify-between border-2 border-gray-600 bg-black bg-opacity-55  rounded-lg hover:scale-105 duration-300">
              <div>
                <img src={portimg} alt="/" className=" w-[500px] mt-6 " />
              </div>
              <div className="mx-auto flex flex-col w-[400px] mt-2">
                <h1 className=" font-bold text-center text-2xl py-4 tracking-wider">
                  Portfolio website
                </h1>
                <button className="w-[40%] mx-auto mb-6 py-2 font-semibold text-xl bg-zinc-900 rounded-lg hover:scale-110 duration-200 hover:text-zinc-900 hover:bg-neutral-400 ">
                  <a href="https://github.com/maxfury08/portfolio"> GitHub Link </a>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
