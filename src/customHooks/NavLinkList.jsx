import React from 'react'
import {Link} from 'react-router'
import AllUsers from '../components/AllUsers'
import AddUsers from '../components/AddUsers'
import style from './NavLinkList.module.css'
import PageNotFound from '../components/PageNotFound'

const NavLinkList = () => {
  return (
    <>
    <div className={style.navDiv}>
        <Link to='/' element={<AllUsers/>}>View All Users</Link>
        <Link to='/addusers' element={<AddUsers/>}>Add Users</Link>
    </div>
        
    </>
  )
}

export default NavLinkList