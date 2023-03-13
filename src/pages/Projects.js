import ProjectItem from "../components/ProjectItem";
import "../styles/Projects.css"
import { ProjectList } from "../helper/ProjectList";

const Projects = () => {
    return (
        <div className="projects">
            <h1> My Personal Projects </h1>
            <div className="projectList">
                {ProjectList.map((project) => {
                    return <ProjectItem name={project.name} image={project.image} />
                })}
            </div>
        </div>
    )
}

export default Projects;