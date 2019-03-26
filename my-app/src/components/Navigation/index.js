import React from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import logo from './startIQ.png';
import './style.css'

const Navigation = () => (
  <div className = "nav">
  
  <nav className='navbar navbar-inverse'>
    <div className='container-fluid'>
      <img src= {logo} alt="StartIQ" />
      {/* <li> <Link to={ROUTES.LANDING}>Landing</Link> </li> */}
      <li> <Link to={ROUTES.HOME} >Home</Link> </li>
      <li> Assets </li>
      <li> <Link to={ROUTES.ADMIN}>Profile</Link> </li>
    </div>
  </nav>

  </div>
);
export default Navigation;