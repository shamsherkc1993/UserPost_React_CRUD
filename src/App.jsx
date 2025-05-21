import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useEffect } from 'react'
import { UserContext } from './components/UserContext'

function App() {
  const [userDetail, setUserDetail] = useState([])
  const URL = "https://dummyjson.com/posts"
  async function allUsers () {
    const response = await fetch(URL);
    const data = await response.json()
    setUserDetail(data.posts)
  }

  useEffect(()=>{
    allUsers()

  },[])
  return (
    <>
    <UserContext.Provider value={{userDetail, setUserDetail}}>
      <Header userDetail={userDetail}/>
      <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App

