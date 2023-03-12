import "../styles/Home.css"
import { IconButton } from "@material-ui/core"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import GitHubIcon from "@material-ui/icons/GitHub"
import EmailIcon from "@material-ui/icons/Email"

const Home = () => {
    return (
        <div className="home">
            <div className="photo">
                <img className="my-image" src={window.location.origin + '/20220821_152113__01.jpg'} alt="" height="200px"/>
            </div>
            <div className="about">
                <div classname="intro">
                    <h1 className="typed">Hi, My Name is Shahnawaz Idariya</h1>
                </div>
                <div className="prompt">
                    <p>A Software Application Engineer with a passion for learning and creating</p>
                    <IconButton component="a" href="https://www.linkedin.com/in/shahnawaz-idariya-6b6223189/" target="_blank" >
                        <LinkedInIcon className="icon" />
                    </IconButton>
                    <IconButton component="a" href="https://github.com/shahnawaz52" target="_blank">
                        <GitHubIcon className="icon" />
                    </IconButton >
                    <IconButton component="a" href="https://mail.google.com/mail/u/2/#inbox" target="_blank">
                        <EmailIcon className="icon" />
                    </IconButton>
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
                            Linux, Odoo, Github, ReactJS, NodeJS, ExpressJS, Odoo/owl, Qunit, JUnit, ORM, Git
                        </span>
                    </li>
                    <li className="item">
                        <h2>Cloud Technologies/Libraries</h2>
                        <span>
                            Microsoft Azure, Odoo Sh, ORM, Agile, TDD, Docker, Kubernetes, keras, Surprise, Scikit-learn, Numpy, Pandas, Seaborn
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