import GitHubIcon from "@material-ui/icons/GitHub"
import { IconButton } from "@material-ui/core"
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import "../styles/ProjectDisplay.css"

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id]
    return (
        <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt=""/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <IconButton component="a" href={project.link} target="_blank">
                <GitHubIcon className="icon" />
            </IconButton>
        </div>
    )
}

export default ProjectDisplay;