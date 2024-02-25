import styled from "styled-components";
import {Link} from "react-router-dom"

export const NavigationContainer = styled.div`
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  background-color: rgb(34, 32, 32);
  background-image: url("https://static.vecteezy.com/system/resources/thumbnails/001/225/154/small/black-low-poly-geometric-background.jpg");

`
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 20px;
`
export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  align-items:center;
  text-decoration: none;
  color: whitesmoke;
  cursor: pointer;
`

// .navigation {
    
//     .logo-container {
//       


//       .name{
//         color: whitesmoke;
//         font-size: small;
//         justify-content: center;
//         font-weight: 700;
//       }
//     }
  
//     .nav-links-container {
  
//       .nav-link {
//       }
//     }
//   }