import React from 'react';
import { useContext } from 'react';
import { UserContext } from './UserContext';
import style from './AllUsers.module.css';
import { Container, Row, Button, Modal, Form } from 'react-bootstrap';
import DeleteAddUser from './DeleteAddUser';

const AllUsers = () => {
  const { 
    userDetail, 
    loading, 
    apiError, 
    allUsers,
    updateUser,
    editingUser,
    setEditingUser
  } = useContext(UserContext);
  
  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditingUser({
      ...editingUser,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(editingUser);
  };

  return (
    <>
      <h2 className={style.h2Title}>User Posts</h2>
      <Container>
        <Row>
          {!loading ? 
            userDetail.map((post) => (
              <div key={post.id}>
                <div className={style.contentDiv}>
                  <h3>{post.title}</h3>
                  <p>{post.description} 
                    <Button 
                      variant="warning" 
                      style={{marginLeft: '10px'}}
                      onClick={() => setEditingUser(post)}
                    >
                      Edit
                    </Button>
                    <DeleteAddUser userId={post.id} />
                  </p>
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

      {/* Edit Modal */}
      <Modal show={!!editingUser} onHide={() => setEditingUser(null)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editingUser && (
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editingUser.title}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formDescription">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  name="description"
                  value={editingUser.description}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Save Changes
              </Button>
            </Form>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AllUsers;