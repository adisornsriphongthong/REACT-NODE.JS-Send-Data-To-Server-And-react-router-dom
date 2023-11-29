import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import './App.css';

const Content = () => {
  return (
    <div>
      <header style={{display: 'flex'}}>
            <NavLink to={'/'}><h1 style={{fontSize: '20px'}}>Home</h1></NavLink>
            <NavLink to={'contact'}><h1 style={{fontSize: '20px'}}>Contact</h1></NavLink>
            <NavLink to={'help'}><h1 style={{fontSize: '20px'}}>Help</h1></NavLink>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Content
