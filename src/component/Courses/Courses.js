import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';
import Dropdown from 'react-bootstrap/Dropdown';
import './Courses.css'
const Courses = () => {
    const data=useLoaderData();
    return (
            <Container fluid>
                <Row>
                    <Col className='bg-secondary' md={4}>
                        <ul className='d-md-block d-none'>
                            {
                                data.map(course=><li className='border-bottom mt-5 pb-2' key={course.id}><Link className='text-light fw-bold' style={{textDecoration:'none'}} to={`/courses/${course.id}`}>{course.name}</Link></li>)
                            }
                        </ul>
                        <Dropdown className='w-100 d-md-none'>
                        <Dropdown.Toggle variant="" id="dropdown-basic">
                          Courses
                        </Dropdown.Toggle>
                  
                        <Dropdown.Menu className='bg-dark w-100'>
                          <ul className='w-100 ps-2'>
                          {
                            data.map(course=><li className='border-bottom mt-5 pb-2' key={course.id}><Link className='text-light fw-bold' style={{textDecoration:'none'}} to={`/courses/${course.id}`}>{course.name}</Link></li>)
                            }
                          </ul>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                    <Col md={8}>
                            <Row sm={1} md={2} lg={3} className='g-4 py-5'>
                                {
                                    data.map(course=><CourseCard course={course}/>)
                                }
                            </Row>
                    </Col>
                </Row>
            </Container>
    );
};

export default Courses;

