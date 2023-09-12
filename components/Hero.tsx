import React from "react";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero bg-base-200 min-h-screen z-0 px-4 lg:px-24 xl:px-44"
    >
      <div className="hero bg-base-200">
        <div className="hero-content mb-12 flex-col items-center lg:mt-2 lg:flex-row-reverse gap-4">
          <img
            src="/image.png"
            className="rounded-full object-contain mt-16 w-9/12 sm:w-7/12 md:w-4/12 lg:mt-0"
            alt="Cheng Qian"
          />
          <div>
            <h1 className="text-5xl font-bold text-accent">
              Hi, I&apos;m Cheng
            </h1>
            <p className="py-6">
              Hello, I&apos;m a Software Engineering student with a strong
              interest in programming and a genuine passion for learning. I have
              a particular fondness for full-stack applications and machine
              learning. Through a combination of technical skills and a
              problem-solving approach, I strive to deliver high-quality code to
              improve the performance of websites, software, and applications.
            </p>

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
