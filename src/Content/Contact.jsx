import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div style={{margin: '15px'}}>
        This is Contact
      <header>
        <NavLink style={{margin: '5px'}} to={'adisorn'}><button>adisorn</button></NavLink>
        <NavLink style={{margin: '5px'}} to={'jackson'}><button>jackson</button></NavLink>
      </header>

      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default Contact
