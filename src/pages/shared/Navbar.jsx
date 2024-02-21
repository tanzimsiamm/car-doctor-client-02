import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'

const Navbar = () => {
    const navItems = <>
        <li><Link to='/'>home</Link></li>
        <li><Link to = '/login'>login</Link></li>
        <li><Link to = '/signUp'>sign up</Link></li>
        
    </>
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/'>
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
            <button className="btn btn-outline btn-secondary">Appoinment</button>

            </div>
        </div>
    );
};

export default Navbar;