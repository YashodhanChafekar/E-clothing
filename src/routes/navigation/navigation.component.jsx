import { Outlet, Link } from "react-router-dom";
import { Fragment} from "react";
import { ReactComponent as Logo } from "../../assets/e-clothing-logo.svg";
import './navigation.styles.scss';

const Navigation = () => {
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
                    <Link className = 'nav-link'to='/auth'>
                        Sign In
                    </Link>
                </div>
            </div>

            <Outlet/>
        </Fragment>
        
    );
}

export default Navigation
