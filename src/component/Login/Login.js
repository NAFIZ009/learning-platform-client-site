import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation,  useNavigate,Link, Navigate } from 'react-router-dom';
import {Context} from '../../Context/AuthContext';
const Login = () => {
    const {user,userWithGoogle,userLogin,setLocationFrom}=useContext(Context);
    const [info,setInfo]=useState('');
    const navigate=useNavigate();
    const location=useLocation();
    const from=location.state?.from?.pathname || '/';
    //login function
    const login =e=>{
        e.preventDefault();
        setInfo('');
        const form=e.target;
        const mail=form.mail.value;
        const password = form.pass.value;
        userLogin(mail,password)
        .then(()=>{
            setInfo('Login successful');
            form.reset();
            if(user&&user.emailVerified){
                navigate(from,{replace:true})
            }else{
                navigate('/emailverification');
                setLocationFrom(from);
            }
        })
        .catch(err=>setInfo(err.message));
    }
    const googleLogin=()=>{
        userWithGoogle()
        .then(()=>{
            setInfo('Login successful');
            navigate(from,{replace:true});
        })
        .catch(err=>setInfo(err.message));
    }



    return (
        <Form className='w-50 mx-auto mt-5' style={{minHeight:'100vh'}} onSubmit={login}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name='mail' placeholder="Enter Email" />
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='pass' placeholder="Password" />
        </Form.Group>
        {
            info&&<div className="text-info my-3">{info}</div>
        }
        
        <Button variant="primary" type="submit">
            Login
        </Button> <br />
        <Button onClick={googleLogin} className='mt-2 bg-dark fw-bold border-0' variant="primary" type="submit">
            Google
        </Button>
        <p className='mt-2'><small>New Here? <Link to='/register'>Register Now</Link></small></p>
      </Form>
    );
};

export default Login;