import React from 'react'
import {Link} from 'react-router'
import AllUsers from '../components/AllUsers'
import AddUsers from '../components/AddUsers'
import Contact from '../components/Contact'
import style from './NavLinkList.module.css'

const NavLinkList = () => {
  return (
    <>
    <div className={style.navDiv}>
        <Link to='/' element={<AllUsers/>}>View All Users</Link>
        <Link to='/addusers' element={<AddUsers/>}>Add Users</Link>
        <Link to='/contact' element={<Contact/>}>Contact</Link>
    </div>
        
    </>
  )
}

export default NavLinkList