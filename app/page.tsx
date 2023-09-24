import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import FeaturedProject from "@/components/FeaturedProject";
import Project from "@/components/Project";
import { featuredProjects, projects } from "@/constants";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div id="projects" className="text-center font-bold bg-base-200">
        <h1 className="text-4xl py-8">Featured Projects</h1>
        {featuredProjects.map((project, index) => (
          <FeaturedProject
            key={index}
            name={project.name}
            description={project.description}
            github={project.github}
            link={project.link}
            image={project.image}
            techStack={project.techStack}
            index={index}
          />
        ))}
      </div>
      <div className="bg-base-200 flex flex-wrap justify-center py-8">
        {projects.map((project) => (
          <Project
            name={project.name}
            description={project.description}
            github={project.github}
            link={project.link}
            image={project.image}
            techStack={project.techStack}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}
