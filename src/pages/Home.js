import "../styles/Home.css"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GithubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"

const Home = () => {
    return (
        <div className="home">
            <div className="photo">
                <img src={window.location.origin + '/20220821_152113__01.jpg'} alt="" height="500px" width="500px" className="my-image"/>
            </div>
            <div className="about">
                <h2>Hi, My Name is Shahnawaz Idariya</h2>
                <div className="prompt">
                    <p>A Software Application Engineer with a passion for learning and creating</p>
                    <LinkedInIcon />
                    <GithubIcon />
                    <EmailIcon />
                </div>
            </div>
            <div className="skills">
                <h1>Skills</h1>
                <ol className="list">
                    <li className="item">
                        <h2>Languages/Databases</h2>
                        <span>
                            C++, Python, Javascript, HTML5/CSS3, PostgreSQL, XML, Bootstrap, SQL, MongoDB
                        </span>
                    </li>
                    <li className="item">
                        <h2>Tools/Frameworks</h2>
                        <span>
                            Linux, Odoo, Github, ReactJS, NodeJS, ExpressJS, Odoo/owl, Qunit, JUnit
                        </span>
                    </li>
                    <li className="item">
                        <h2>Development Tools</h2>
                        <span>
                            Visual Studio Code, Pycharm, Sublime, MCUXpresso, Jupyter Notebook, Google Colab
                        </span>
                    </li>
                </ol>
            </div>
        </div>
    )
}

export default Home;