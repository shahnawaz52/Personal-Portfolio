import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import FacebookIcon from "@material-ui/icons/Facebook"
import "../styles/Footer.css"


const Footer = () => {
    return (
        <div className="footer">
            <div className="socialMedia">
                <InstagramIcon />
                <LinkedInIcon />
                <FacebookIcon />
            </div>
            <p> &copy; 2023 shahnawazidariya</p>
        </div>
    )
}

export default Footer;