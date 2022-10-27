import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
const Register = () => {
    const [error,setError]=useState('');
    const [info,setInfo]=useState('');
    
    // const auth = getAuth(app);

    // const mailVerification=authName=>{
    //     sendEmailVerification(authName)
    //         .then(()=>{
    //             setInfo("Varification mail has send");
    //             alert("Varification mail has send");
    //         })
    //         .catch((err)=>{setError(err.message)});
    // }

    const createUser=e=>{
        e.preventDefault();
        setError('');
        setInfo("");
        const form=e.target;
        const name=form.name.value;
        const mail=form.mail.value;
        const password = form.pass.value;
        if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password)){
            setError("invalid password");
            return;
        };
        // createUserWithEmailAndPassword(auth,mail,password)
        // .then(()=>{
        //             updateProfile(auth.currentUser,{
        //                 displayName:name
        //             })
        //             .then(()=>{})
        //             .catch((err)=>setError(err.message));
        //             mailVerification(auth.currentUser);
        //             form.reset();
        // })
        // .catch(err=>setError(err.message));
    }
    return (
        <Form className='w-50 mx-auto mt-5' style={{minHeight:'100vh'}} onSubmit={createUser}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Name" />
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
            error&&<div className="text-danger">{error}</div>
        }
        {
            info&&<div className="text-success">{info}</div>
        }
        
        <Button variant="primary" type="submit">
            Verify With Mail
        </Button>
        <p><small>Already Registered? <Link to='/login'>Login Now</Link></small></p>
      </Form>
    );
};

export default Register;