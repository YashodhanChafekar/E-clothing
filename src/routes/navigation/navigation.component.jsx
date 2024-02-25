import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext} from "react";
import { ReactComponent as Logo } from "../../assets/e-clothing-logo.svg";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from './navigation.styles';

const Navigation = () => {
    const {currentUser} =  useContext(UserContext);
    const {isCartOpen} = useContext(CartContext);
    return (
        <Fragment>
            <NavigationContainer>
                <LogoContainer to='/'>
                    <Logo /> 
                </LogoContainer>
                <NavLinks>
                    <NavLink to='/shop'>
                        Shop
                    </NavLink>
                        {
                            currentUser ? (
                                <NavLink as="span" to='/auth' onClick={signOutUser}>
                                    Sign Out
                                </NavLink>
                            ):
                            (
                                <NavLink  className = 'nav-link'to='/auth'>
                                    Sign In
                                </NavLink>
                            )
                        }
                    <CartIcon/>
                </NavLinks>
                {isCartOpen && <CartDropdown/>}
            </NavigationContainer>

            <Outlet/>
        </Fragment>
        
    );
}

export default Navigation
