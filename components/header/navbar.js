//React
import React,{useState} from "react";
//third-party
import classNames from 'classnames';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav
} from "reactstrap";
import {mobileMenuOpen} from '../../store/mobile-menu';

const ComponentsNavbar = (props) => {
    const [color] = useState("bg-light");
    const user_token = props.token;
    return (
      <Navbar
        className={"fixed-top " + color}
        color-on-scroll="100"
        expand="sm"
      >
        <NavbarBrand href="/">
          <img className="navbar_logo" src={`/static/images/apple-icon.png`} 
          alt="logo" />
        </NavbarBrand>
        <button className="navbar-toggler" type="button" onClick={() => props.mobileMenuOpen()} style={
          {border:'1px solid #000',width:'50px',height:'50px'}}>
            <span className="navbar-toggler-icon" style={{background:'#000',height:'1px',margin:'0px'}}></span>
            <span className="navbar-toggler-icon" style={{background:'#000',height:'1px',margin:'0px'}}></span>
        </button>

        <Collapse navbar>
            <Nav className="mx-auto" navbar>
              <NavItem>
                <NavLink href="/" className={
                  classNames({'nav_link-active':props.pathname === "/"})
                }>
                  Home
                </NavLink>
              </NavItem> 
              <NavItem>
                <NavLink href="/covid19" className={
                  classNames({'nav_link-active':props.pathname === "/covid19"})
                }>
                  Covid19
                </NavLink>
              </NavItem>               
              <NavItem>
                <NavLink href="/market_place" >Market place</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hostels" >Hostels</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink href="/bs/ovo_fries" >Ovo fry's</NavLink>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                
                <NavItem>
                <NavLink href="/account/dashboard">
                  Dashboard
                </NavLink>
                </NavItem>
                <NavItem>
                <NavLink href="/account/store" >
                  My store
                </NavLink>
                </NavItem>
                {
                  user_token ? (
                  <NavItem>
                  <NavLink href="/account/logout">Logout</NavLink>
                  </NavItem>
                ) : null
                }                         
            </Nav>
        </Collapse>
      </Navbar>
    );
};

ComponentsNavbar.getInitialProps = ({store,pathname}) => {
    let token = store.getState().user.token;
    let mobileMenuOpen = store.dispatch(mobileMenuOpen());
    return {
        token,mobileMenuOpen,pathname
    }
};
export default ComponentsNavbar;