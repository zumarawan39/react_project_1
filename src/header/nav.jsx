
import Img from  "../assets/images/brand_logo.png";
import { Link } from "react-router-dom";
function Nav() {
    return(
        <div>
         <nav>
            <div className="logo">
                <img src={Img} alt="not found" />
            </div>
            <div className="list">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutus">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/blog">Blogs</Link></li>
                </ul>
            </div>
            <button className="login">Login</button>
         </nav>
        </div>
    )
}
export default Nav;