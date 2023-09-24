import React from "react";

type Props = {
  name: string;
  description: string;
  image: string;
  link: string;
  github: string;
  techStack: string[];
};

const Projects = ({
  name,
  description,
  image,
  link,
  github,
  techStack,
}: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl m-5">
      <figure>
        <img src={image} alt="project" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold">{name}</h2>
        <p className="text-sm">{description}</p>
        <div className="card-actions justify-end">
          {link != "" && (
            <a className="btn btn-primary" href={link} target="_blank">
              Link
            </a>
          )}
          {github != "" && (
            <a className="btn btn-primary" href={github} target="_blank">
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
