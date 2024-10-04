import { NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/about'>About Us</NavLink></li>
                    <li><NavLink to='/contact'>Contact Us</NavLink></li>
                    <li><NavLink to='/users'>Users</NavLink></li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default Header;