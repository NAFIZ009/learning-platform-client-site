import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../../Context/AuthContext';

const EmailVarif = () => {
    const {user,locationFrom}=useContext(Context);
    const [warning,setWarning] = useState(false);
    const navigate=useNavigate();
    console.log(locationFrom);
    const checkingEmailVerification=()=>{
        console.log(user)
        if(user && user.emailVerified){
            setWarning(false);
            navigate(locationFrom,{replace:true});
        }else{
            setWarning(true);
        }
    }
    return (
        <div className='w-full py-5 flex justify-center'>
        <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
          <div className="artboard artboard-demo phone-1 px-3">
              <p className='text-center fw-bold text-light'>Please Check Your mail And Verify Your Email Address</p>
              <p className='text-center fw-bold text-light'>Do You Verified Your Mail?</p>
              {
                  warning&&<p className='text-danger'>Please Verify Your Email First</p>
              }
              <button onClick={checkingEmailVerification} className='btn btn-outline-success'>Yes</button>
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default EmailVarif;