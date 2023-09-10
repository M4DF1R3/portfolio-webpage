import React from "react";

const Hero = () => {
  return (
    <div
      id="Hero"
      className="hero bg-base-200 min-h-screen z-0 px-4 lg:px-24 xl:px-44"
    >
      <div className="hero bg-base-200">
        <div className="hero-content mb-12 flex-col items-center lg:mt-2 lg:flex-row-reverse gap-4">
          <img
            src="/image.png"
            className="rounded-full object-contain mt-16 w-9/12 sm:w-7/12 md:w-4/12 lg:mt-0"
          />
          <div>
            <h1 className="text-5xl font-bold text-accent">Hi, I'm Cheng</h1>
            <p className="py-6">
              I'm a Software Engineering Student at the University of Alberta. I
              love full-stack applications and machine learning. With a
              combination of technical expertise and problem-driven solutions, I
              like to deliver high quality code to enhance websites, software,
              and applications
            </p>
            <div></div>
            {/* <a href="#Contact" className="btn btn-secondary">
              Contact Me
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
