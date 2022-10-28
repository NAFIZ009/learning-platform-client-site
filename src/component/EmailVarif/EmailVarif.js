import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const EmailVarif = () => {  
    const navigate=useNavigate();

    return (
        <div className='w-full py-5 flex justify-center'>
        <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1 px-3">
              <p className='text-center fw-bold text-light'>Do You Verify Your Email?</p>
              <p className='text-center fw-bold text-light'>If You Verfiy Your Email Then Go For LogIn</p>
            <Link className='btn btn-primary' onClick={()=>{
                navigate('/login')
                window.location.reload();
            }} >Login</Link>
            
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default EmailVarif;