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
  const [editingUser, setEditingUser] = useState(null);

  

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

  const deleteUser = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      
      // Update the UI by removing the deleted user
      setUserDetail(userDetail.filter(user => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      setLoading(true);
      const response = await fetch(`${URL}/${updatedUser.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedUser),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      
      setUserDetail(userDetail.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      ));
      setEditingUser(null);
    } catch (error) {
      console.error("Error updating user:", error);
      setApiError(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(()=>{
    allUsers()
    setLoading(true)

  },[])
  return (
    <>
    <UserContext.Provider value={{userDetail, setUserDetail, loading, setLoading, apiError, setApiError, allUsers, deleteUser, updateUser, setEditingUser, editingUser}}>
      <Header/>
      <Footer/>
    </UserContext.Provider>
    </>
  )
}

export default App

