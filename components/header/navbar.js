//React
import React,{useState} from "react";
//core-comonents
import Link from 'next/link';
//third-party
import classNames from 'classnames';
import {connect} from 'react-redux';
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav
} from "reactstrap";
import {mobileMenuOpen} from '../../store/mobile-menu';

const ComponentsNavbar = (props) => {
    const [color] = useState("bg-transparent");
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
                <Link href="/" >
                  <a className={classNames({'nav_link-active':props.pathname === "/"})}>
                    Home
                  </a>
                </Link>
              </NavItem> 
              <NavItem>
                <Link href="/covid19">
                  <a className={classNames({'nav_link-active':props.pathname === "/covid19"})}>
                    Covid19
                  </a>
                </Link>
              </NavItem>               
              <NavItem>
                <Link href="/market_place" >
                  <a>Market place</a>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="/hostels">
                  <a>Hostels</a>
                </Link>
              </NavItem>
              <NavItem>
                  <Link href="/bs/ovo_fries" >
                    <a>Ovo fry's</a>
                  </Link>
              </NavItem>
            </Nav>
            <Nav className="ml-auto" navbar>
                
                <NavItem>
                <Link href="/account/dashboard">
                  <a>Dashboard</a>
                </Link>
                </NavItem>
                <NavItem>
                <Link href="/account/store" >
                 <a>My store</a> 
                </Link>
                </NavItem>
                {
                  user_token ? (
                  <NavItem>
                  <Link href="/account/logout"><a>Logout</a></Link>
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
const dispatchToProps = {
  mobileMenuOpen
};
export default connect(null,dispatchToProps)(ComponentsNavbar);