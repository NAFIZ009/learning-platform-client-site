import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import {Context} from '../../Context/AuthContext';
const Register = () => {
    const [error,setError]=useState('');
    const [info,setInfo]=useState('');
    const navigate=useNavigate();
    const {userWithEmailAndPassword,userWithGoogle,githubLogin,addingNameAndImage,locationFrom}=useContext(Context);
    //form submit button
    const createUser=e=>{
        e.preventDefault();
        setError('');
        setInfo("");
        const form=e.target;
        const name=form.name.value;
        const mail=form.mail.value;
        const password = form.pass.value;
        const img=form.img.value;
        
        userWithEmailAndPassword(mail,password)
        .then(()=>{
            addingNameAndImage(name,img)
            .then(()=>{
              navigate(locationFrom,{replace:true});  
            })
            .catch(err=>setError(err.message));
            setInfo('Registration Success');
            form.reset();
        })
        .catch(err=>setError(err.message));
    }
    //google login
    const googleLogin =()=>{
        userWithGoogle()
        .then(()=>{navigate(locationFrom,{replace:true});})
        .catch(err=>setError(err.message));
    }
    //github btn
    const github =()=>{
      githubLogin()
      .then(()=>{
        navigate(locationFrom,{replace:true});
      })
      .catch(err=>setError(err.message));
    }
    return (
        <Form className='w-50 mx-auto mt-5' style={{minHeight:'100vh'}} onSubmit={createUser}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicImg">
          <Form.Label>Image Link</Form.Label>
          <Form.Control type="text" name='img' placeholder="Image Link" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='mail' placeholder="Enter Email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='pass' placeholder="Password" />
        </Form.Group>
        {
            error&&<div className="text-danger my-3 ">{error}</div>
        }
        {
            info&&<div className="text-success my-3">{info}</div>
        }
        
        <Button variant="primary" type="submit">
            Register
        </Button> <br />
        <Button onClick={googleLogin} className='mt-2 bg-dark fw-bold border-0' variant="primary" type="submit">
             Google
        </Button><br />
        <Button onClick={github} className='mt-2 bg-dark fw-bold border-0' variant="primary" type="submit">
             Github
        </Button>
        <p className='mt-2'><small>Already Registered? <Link to='/login'>Login Now</Link></small></p>
      </Form>
    );
};

export default Register;