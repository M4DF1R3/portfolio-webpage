import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import FeaturedProject from "@/components/FeaturedProject";
import { featuredProjects } from "@/constants";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <div id="projects" className="text-center font-bold bg-base-200">
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
    </>
  );
}
