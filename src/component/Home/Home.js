import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate();
    const joinButton=()=>{
        navigate('/register');
    }
    return (
        <div className="hero min-h-screen w-full">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src="https://img.freepik.com/free-vector/developer-activity-concept-illustration_114360-2801.jpg?w=740&t=st=1666724627~exp=1666725227~hmac=8b40b131e95e4feba06ea763faf0b52a499b33dfd90b7d0764d3b6425e7f3bd7" className="lg:w-4/12 rounded-lg shadow-2xl" alt='please connect to internet for loading the img' />
                <div>
                    <h1 className="text-6xl font-bold text-md-start text-center">Learn Without Your Limit</h1>
                    <p className="py-6 text-lg text-slate-400 text-md-start text-center">We make learning engaging & effective, so that you are ready to achieve your goals</p>
                    <button onClick={joinButton} className="btn btn-primary fw-bold me-3">Join For Free</button>
                </div>
            </div>
        </div>
    );
};

export default Home;