import React from 'react'
import { Routes, Route } from "react-router";
import AllUsers from './AllUsers'
import AddUsers from './AddUsers'
import NavLinkList from '../customHooks/NavLinkList';
import PageNotFound from './PageNotFound';

const Header = () => {
  return (
    <>
     <NavLinkList/>

     <Routes>
        <Route path='/' element={<AllUsers/>}/>
        <Route path='/AddUsers' element={<AddUsers />}/>
        <Route path='/editUsers' element={<AddUsers />}/>
        <Route path='/*' element={<PageNotFound />}/>
     </Routes>
    </>
  )
}

export default Header
