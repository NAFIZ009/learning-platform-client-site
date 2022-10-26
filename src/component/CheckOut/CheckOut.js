import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import Md from '../Modal/Modal';
const CheckOut = () => {
    const {id,name,author,rating,price,img,enrolled}=useLoaderData();
    const navigate=useNavigate();
    return (
        <Col className='w-100 vh-100 ' id='yourAppElement'>
        <h1 className='text-center mt-3 mb-5'>CheckOut Course</h1>
        <Card className='mx-auto w-25'>
        <Card.Img variant="top" src={img} className='h-25' style={{objectFit:'cover'}} />
        
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className='mb-1 text-muted'>By:-{author}</p>
            <p className='mb-1 '>{rating}</p>
            <p className='mb-1 fs-4 fw-bold'>{price}</p>
            <p className='mb-1 '>Enrolled By -{enrolled} Students</p>
          </Card.Text>
          <Md name={name} price={price}></Md>
          <button className='btn btn-danger' onClick={()=>{navigate(`/courses/${id}`)}}>Cancel</button>
        </Card.Body>
      </Card>
        </Col>
    );
};

export default CheckOut;