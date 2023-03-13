import ProjectItem from "../components/ProjectItem";
import Spotify from "../assets/spotify.jpg"
import "../styles/Projects.css"

const Projects = () => {
    return (
        <div className="projects">
            <h1> My Personal Projects </h1>
            <div className="projectList">
                <ProjectItem name="Spotify Music Recommendation" image={Spotify} />
            </div>
        </div>
    )
}

export default Projects;