import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext} from "react";
import { ReactComponent as Logo } from "../../assets/e-clothing-logo.svg";
import './navigation.styles.scss';
import { userContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {
    const {currentUser} =  useContext(userContext);

    return (
        <Fragment>
            <div className="navigation">
                <Link className = 'logo-container' to='/'>
                    <Logo />   
                    <span className="name">InstaFashion</span> 
                </Link>
                <div className="nav-links-container">
                    <Link className = 'nav-link'to='/shop'>
                        Shop
                    </Link>
                    {
                        currentUser ? (
                            <span className = 'nav-link'to='/auth' onClick={signOutUser}>
                                Sign Out
                            </span>
                        ):
                        (
                            <Link className = 'nav-link'to='/auth'>
                                Sign In
                            </Link>
                        )
                    };
                </div>
            </div>

            <Outlet/>
        </Fragment>
        
    );
}

export default Navigation
