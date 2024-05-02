import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin"

const Navbar = () => {

    const {user , logOut} = useContext(AuthContext) ;

    const [isAdmin] = useAdmin() ; 

    const [cart] = useCart() ;

    const handleLogOut = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Order Food</Link></li>
        
        {
            user && isAdmin && <li><Link to="/dashBoard/adminHome">DashBoard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashBoard/userHome">DashBoard</Link></li>
        }
        <li>
            <Link to='/cart'>
                <FaShoppingCart></FaShoppingCart>
                <div className="badge badge-secondary">
                    +{cart.length}
                </div>
            </Link>
        </li>


        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost -mt-1.5">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }
        </>

    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>

                {
                    user ? <>
                        <a className="btn -mt-2 text-yellow-400">{user?.displayName}</a>
                    </> : <>
                        <a className="btn">Anonymous</a>
                    </>
                }
                
            </div>
        </>
    );
};

export default Navbar;