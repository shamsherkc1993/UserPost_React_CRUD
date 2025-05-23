import React from 'react'
import { Routes, Route } from "react-router";
import AllUsers from './AllUsers'
import AddUsers from './AddUsers'
import Contact from './Contact';
import NavLinkList from '../customHooks/NavLinkList';

const Header = () => {
  return (
    <>
     <NavLinkList/>
     <Routes>
        <Route path='/' element={<AllUsers/>}/>
        <Route path='/AddUsers' element={<AddUsers />}/>
        <Route path='/editUsers/:id' element={<AddUsers />}/>

        <Route path='/contact' element={<Contact/>}/>
     </Routes>
    </>
  )
}

export default Header
