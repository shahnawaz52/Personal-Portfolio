import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={() => setExpandNavbar((prev) => !prev)}>
                    <ReorderIcon />
                </button>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/"> Home </Link>
                    </li>
                    <li>
                        <Link to="/projects"> Projects </Link>
                    </li>
                    <li>
                        <Link to="/experience"> Experience </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;