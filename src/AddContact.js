import React, {useContext, useState} from 'react';
import { Form, Container, Col} from 'react-bootstrap';
import { HiPlus } from "react-icons/hi";
import {MovieContext} from './MovieContext';

const AddContact = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);
    var id = name;
    const updateName = (e) =>
        setName(e.target.value);

    const updatePrice = (e) =>
        setPrice(e.target.value);

    const addContact = e => {
        e.preventDefault();
        setMovies(prevMovies => [ ...prevMovies, {name: name, id:name , price: price,}]);
    }

    return(
        <div className="App">
        <div className="phone-book-header">
        <img id="mail-icon" src="/images/pngtree-email-icon-png.jpg" alt="mail-icon"></img>
         <h1 className="phone-book-title">My UT Phone Book</h1>
         </div>
         <Container>
         <div className="new-contact-title"> <h4>Add New Contact</h4></div>
             <Form onSubmit={addContact} className="contact-name-border">
         <Form.Row>
           <Col>
             <Form.Control value={name} onChange={updateName} name="name"  type="text" placeholder="Name" />
           </Col>
           <Col className="phone-column">
             <Form.Control value={price} onChange={updatePrice} type="text" placeholder="Phone Number" />
             </Col>
             
             <button type="submit" className="add-button">
             <HiPlus className="plus-icon" /> <h4><div className="add-button-spacing">Add </div></h4>
             </button>
         </Form.Row>
       </Form>
       </Container>
       </div>        

    );
};

export default AddContact;