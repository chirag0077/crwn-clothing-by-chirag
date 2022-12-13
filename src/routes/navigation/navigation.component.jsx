import { Fragment } from "react";
import { Outlet , Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg';
import './navigation.styles.css'
//An <Outlet> should be used in parent route elements to render their child route elements. This allows nested UI to show up when child routes are rendered. If the parent route matched exactly, it will render a child index route or nothing if there is no index route.Here parent level is navigation bar
// Fragments--  common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM
// <Link>--The primary way to allow users to navigate around your application. <Link> will render a fully accessible anchor tag with the proper href.A <Link> can know when the route it links to is active and automatically apply an activeClassName and/or activeStyle when given either prop. The <Link> will be active if the current route is either the linked route or any descendant of the linked route. To have the link be active only on the exact linked route, use <IndexLink> instead or set the onlyActiveOnIndex prop.

const Navigation = () => {
  return (
  <Fragment>  
      <div className="navigation">
        <Link className="logo-container" to ='/'>
          <CrwnLogo className="logo"/> 
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className='nav-link' to='/sign-in'>
            SIGN-IN
          </Link>
        </div>
      </div>    
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
