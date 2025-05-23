import React from 'react'
import { useState } from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

const AddUsers = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [postalZip, setPostalZip] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const createUser = async() => {
    if(!fullName || !email || !phone || !postalZip || !country || !city || !address || !title || !desc) {
      alert("Please fill out all fields");
      return;
    }

    try {
      const url = "http://localhost:3000/users";
      let response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName, email, phone, postalZip, 
          country, city, address, title, desc
        })
      });

      if (response.ok) {
        alert("New user added successfully");
        setFullName('');
        setEmail('');
        setPhone('');
        setPostalZip('');
        setCountry('');
        setCity('');
        setAddress('');
        setTitle('');
        setDesc('');
      } else {
        alert("Error adding user");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form");
    }
  }

  return (
    <>
      <Container>
        <Row>
          <h1>Add User Data</h1>
          <Form.Control 
            type="text" 
            placeholder="Full Name" 
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="email" 
            placeholder="Email" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="tel" 
            placeholder="Contact Number" 
            value={phone}
            onChange={(e)=>setPhone(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="number" 
            placeholder="Zip Code" 
            value={postalZip}
            onChange={(e)=>setPostalZip(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="text" 
            placeholder="Country" 
            value={country}
            onChange={(e)=>setCountry(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="text" 
            placeholder="City" 
            value={city}
            onChange={(e)=>setCity(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="text" 
            placeholder="Address" 
            value={address}
            onChange={(e)=>setAddress(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="text" 
            placeholder="Title" 
            value={title}
            onChange={(e)=>setTitle(e.target.value)} 
            style={{margin: "5px"}}
          />
          <Form.Control 
            type="text" 
            placeholder="Description"  
            value={desc}
            onChange={(e)=>setDesc(e.target.value)} 
            style={{margin:'5px', padding:'50px 10px'}}
          />
          <Button 
            variant={'success'}
            onClick={createUser} 
            style={{margin: '10px'}}
          >
            Submit
          </Button>
        </Row>
      </Container>
    </>
  )
}

export default AddUsers