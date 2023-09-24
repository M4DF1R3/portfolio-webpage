"use client";
import React, { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";

type Props = {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  index: number;
  techStack: string[];
};

const FeaturedProject = ({
  name,
  description,
  image,
  link,
  github,
  index,
  techStack,
}: Props) => {
  const [windowWidth, setWindowWidth] = useState<number>(1024);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    addEventListener("resize", (event) => {
      setWindowWidth(window.innerWidth);
    });
  }, []);

  const handleGoToLink = (link: string) => {
    window.open(link, "_blank");
  };

  return (
    <>
      {(index % 2 === 0 && windowWidth > 768) || windowWidth < 768 ? (
        <AnimationOnScroll animateOnce animateIn="animate__slideInLeft">
          <div className="flex justify-center flex-wrap py-8 mx-6 md:gap-6 overflow-x-hidden">
            <img
              className="object-cover rounded-2xl w-full cursor-pointer sm:w-6/12 md:w-4/12"
              src={image}
              alt={`A mockup of ${name}`}
              onClick={() => handleGoToLink(link)}
            />
            <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2">
              <a href={link} target="_blank" rel="noreferrer">
                <h3 className="stat-value text-2xl lg:text-3xl">{name}</h3>
              </a>
              <div className="flex gap-2 flex-wrap">
                {techStack.map((tech, i) => {
                  //let's make the badges different colors to add some pizzazz
                  const badgeColors = [
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                  ];

                  return (
                    <div
                      key={i}
                      className={`badge ${badgeColors[i]} text-md p-3`}
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="my-4 text-sm text-left">{description}</div>
              <div className="flex gap-2">
                {link != "" && (
                  <a
                    className="btn btn-primary w-1/5"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                )}
                {github != "" && (
                  <a
                    className="btn btn w-1/4"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      ) : (
        <AnimationOnScroll animateOnce={true} animateIn="animate__slideInRight">
          <div className="flex justify-center flex-wrap py-8 mx-6 md:gap-6 overflow-x-hidden">
            <div className="shadow-md flex flex-col rounded-2xl justify-around gap-8 p-6 bg-base-300 sm:w-6/12 md:w-6/12 md:gap-2">
              <a href={link} target="_blank" rel="noreferrer">
                <h3 className="stat-value text-2xl lg:text-3xl">{name}</h3>
              </a>
              <div className="flex gap-2 flex-wrap">
                {techStack.map((tech, i) => {
                  //Make the badges different colors
                  const badgeColors = [
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                    "badge-primary",
                    "badge-secondary",
                    "badge-accent",
                    "badge-ghost",
                  ];

                  return (
                    <div
                      key={i}
                      className={`badge ${badgeColors[i]} text-md p-3`}
                    >
                      {tech}
                    </div>
                  );
                })}
              </div>
              <div className="my-4 text-sm text-left">{description}</div>
              <div className="flex gap-2">
                {link != "" && (
                  <a
                    className="btn btn-primary w-1/5"
                    href={link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Link
                  </a>
                )}
                {github != "" && (
                  <a
                    className="btn btn w-1/4"
                    href={github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                )}
              </div>
            </div>
            <img
              className="object-cover rounded-2xl w-full cursor-pointer sm:w-6/12 md:w-4/12"
              src={image}
              alt={`A mockup of ${name}`}
              onClick={() => handleGoToLink(link)}
            />
          </div>
        </AnimationOnScroll>
      )}
    </>
  );
};

export default FeaturedProject;
