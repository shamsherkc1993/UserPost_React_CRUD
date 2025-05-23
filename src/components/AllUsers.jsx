import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import style from './AllUsers.module.css'
import {Container, Row, Col, Button} from 'react-bootstrap'
import EditUserButton from './EditUserButton'
import DeleteAddUser from './DeleteAddUser'

const AllUsers = () => {
  const {userDetail, loading, apiError, allUsers} = useContext(UserContext)
  // console.log(deleteUsers)
  
  return (
   <>
   <h2 className={style.h2Title}>User Posts</h2>
   <Container>
    <Row>
       
      {
      !loading ? 
        userDetail.map((post) => (
          <div key={post.id}>
            <div className={style.contentDiv}>
              <h3>{post.title}</h3>
              <p>{post.description} <EditUserButton/><DeleteAddUser/></p>
            </div>
          </div>
        ))

        : apiError ? (
          <p className="text-danger">Failed to load data. Please try again later.</p>
        ) 

      : <p style={{textAlign: 'center', fontSize: '40px', color:'rgb(37, 34, 213)', padding:'280px 0'}}>Loading Please wait ...</p>
      }
      </Row>
      {apiError && (
        <div className="error-message">
          <p style={{textAlign: 'center', fontSize: '40px', color:'rgb(37, 34, 213)', padding:'100px 0'}}>⚠️ Error: {apiError}</p>
          <Button variant={'primary'} onClick={allUsers} style={{margin: '0 0 50px 500px', padding:'20px 50px'}}>Retry</Button>
        </div>
      )}
      </Container>
   </>
  )
}

export default AllUsers
