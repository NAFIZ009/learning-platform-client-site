import React from 'react';
import {  useLocation, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';

const CourseCard = ({course}) => {
    const navigate=useNavigate();
    
    const DetailsBtnHandler=()=>{
        navigate(`/courses/${id}`);
    }
    const cheakOutBtnHandler=()=>{
        navigate(`/checkout/${id}`);
    }
    const {id,name,author,rating,price,img,enrolled}=course;
    return (
        <Col>
        <Card className='h-100'>
        <Card.Img variant="top" src={img} className='h-100' style={{objectFit:'cover'}} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            <p className='mb-1 text-muted'>By:-{author}</p>
            <p className='mb-1 '>{rating}</p>
            <p className='mb-1 fs-4 fw-bold'>{price}</p>
            <p className='mb-1 '>Enrolled By -{enrolled} Students</p>
          </Card.Text>
          <button onClick={DetailsBtnHandler}  className='btn btn-outline-info'>
            details
          </button>
          <button onClick={cheakOutBtnHandler}  className='btn  btn-outline-success py-2 fw-bold'>
            Get Premium Access
          </button>
        </Card.Body>
      </Card>
        </Col>
        
    );
};

export default CourseCard;