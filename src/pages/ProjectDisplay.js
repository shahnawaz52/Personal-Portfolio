import GitHubIcon from "@material-ui/icons/GitHub"
import { IconButton } from "@material-ui/core"
import { useParams } from "react-router-dom";
import { ProjectList } from "../helper/ProjectList";
import "../styles/ProjectDisplay.css"
import AddcommentForm from "../components/AddCommentForm";
import CommentsList from "../components/CommentsList";

const ProjectDisplay = () => {
    const { id } = useParams();
    const project = ProjectList[id];

    const addUpVote = async () => {
        // const response = await axios.put(`/api/articles/${articleId}/upvote`);
        // const updateArticle = response.data;
        // setArticleInfo(updateArticle);
    }
    return (
        <div>
        <div>
            <div className="project">
            <h1>{project.name}</h1>
            <img src={project.image} alt=""/>
            <p>
                <b>Skills:</b> {project.skills}
            </p>
            <div>
            <IconButton component="a" href={project.link} target="_blank">
                <GitHubIcon className="icon" />
            </IconButton>
            </div>
            </div>

            <div className="upvotes-section">
                <button onClick={addUpVote}>Upvote</button>
                      {/* <button>login to upvote</button> */}
                <p>This project has {} upvote(s)</p>
            </div>
            <div>
            <AddcommentForm
                articleName=""
                onArticleUpdated="" />

            <CommentsList comments="" />
            </div>
        </div>
        </div>
    )
}

export default ProjectDisplay;