import {currentProjects, projects} from "../../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-12 grid gap-6 md:py-18 lg:py-24">
            <h2 className="text-4xl text-(--accent-blue)">My projects</h2>
            <h3 className="mt-5 text-2xl">In development</h3>
            <div className="grid gap-4 md:gap-6 md:grid-cols-[repeat(2,_minmax(0,_1fr))] lg:gap-8 lg:grid-cols-[repeat(3,_minmax(0,_1fr))]">
                {currentProjects.map(project => <ProjectCard name={project.name} desc={project.desc} tech={project.tech} appLink={project.appLink} githubLink={project.githubLink}/>)}
            </div>

            <h3 className="mt-7 text-2xl">Recent</h3>
            <div className="grid gap-4 md:gap-6 md:grid-cols-[repeat(2,_minmax(0,_1fr))] lg:gap-8 lg:grid-cols-[repeat(3,_minmax(0,_1fr))]">
                {projects.map(project => <ProjectCard name={project.name} desc={project.desc} tech={project.tech} appLink={project.appLink} githubLink={project.githubLink}/>)}
            </div>
        </section>
    );
};