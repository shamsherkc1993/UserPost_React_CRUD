import React from 'react'
import { useContext } from 'react'
import { UserContext } from './UserContext'
import style from './AllUsers.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import EditUserButton from './EditUserButton'
import DeleteAddUser from './DeleteAddUser'

const AllUsers = () => {

  const {userDetail} = useContext(UserContext)
  
  return (
   <>
   <h2 className={style.h2Title}>User Posts</h2>
   <Container>
    <Row>
      {userDetail.map((post) => (
        <div key={post.id}>
          <div className={style.contentDiv}>
            <h3>{post.title}</h3>
            <p>{post.body} <EditUserButton/><DeleteAddUser/></p>
          </div>
        </div>
      ))}
      </Row>
      </Container>
   </>
  )
}

export default AllUsers
