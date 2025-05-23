import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import { useEffect } from 'react'
import { UserContext } from './components/UserContext'

function App() {
  const [userDetail, setUserDetail] = useState([])
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  

  const URL = "http://localhost:3000/users"
  // async function allUsers () {
  //   const response = await fetch(URL);
  //   const data = await response.json()
  //   setUserDetail(data.posts)
  //   setLoading(false)
  // }

  async function allUsers() {
    try {
      setLoading(true);
      setApiError(null);
      const response = await fetch(URL);
      
      if (!response.ok) {
        //404 error message
        if (response.status === 404) {
          throw new Error(`404 Not Found - The requested resource at ${URL} doesn't exist`);
        }
        // For other HTTP errors
        throw new Error(`HTTP Error ${response.status}: ${response.statusText}`);
      }
      
      const data = await response.json();
      setUserDetail(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(()=>{
    allUsers()
    setLoading(true)

  },[])
  return (
    <>
    <UserContext.Provider value={{userDetail, setUserDetail, loading, setLoading, apiError, setApiError, allUsers}}>
      <Header/>
      <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App

