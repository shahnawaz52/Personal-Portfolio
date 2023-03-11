import { IconButton } from "@material-ui/core"
import InstagramIcon from "@material-ui/icons/Instagram"
import FacebookIcon from "@material-ui/icons/Facebook"
import "../styles/Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <IconButton component="a" href="https://www.linkedin.com/in/shahnawaz-idariya-6b6223189/" target="_blank" >
                        <InstagramIcon className="icon" />
                    </IconButton>
                <IconButton component="a" href="https://www.linkedin.com/in/shahnawaz-idariya-6b6223189/" target="_blank" >
                    <FacebookIcon className="icon" />
                </IconButton>
            </div>
            <p> &copy; 2023 shahnawazidariya</p>
        </div>
    )
}

export default Footer;