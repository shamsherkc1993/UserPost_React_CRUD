import React from 'react'
import { Button } from 'react-bootstrap'
import { useContext } from 'react';
import { UserContext } from './UserContext';

const DeleteAddUser = ({userId}) => {
  
  const { deleteUser } = useContext(UserContext);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      console.log('Deleting user with ID:', userId);
      deleteUser(userId);
    }
  };
  return (
    <>
      <Button variant='danger' style={{marginLeft: '10px'}} onClick={handleDelete}>Delete</Button>
    </>
  )
}

export default DeleteAddUser
