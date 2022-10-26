import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const CourseDetails = () => {
    const {id,name,author,ratings,price,img,duration,discription,lang}=useLoaderData();
    const navigate=useNavigate();
    const cheakOutBtnHandler=()=>{
        navigate(`/checkout/${id}`);
    }
    return (
        <div className="card mx-auto border-none vh-100">
  <div className="row g-0 align-items-center justify-content-center h-100">
    <div className="col-md-5">
      <img src={img} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-7">
      <div className="card-body">
        <h5 className="card-title fs-1">{name}</h5>
        <p className="card-text">{discription}</p>
        <p className="card-text fs-5 mb-1">
           Author:- {author}
        </p>
        <p className="card-text mb-1">
            Ratings:-{ratings}
        </p>
        <p className="card-text text-muted mb-1">
            Time:-{duration}
        </p>
        <p className="card-text text-muted">
            {lang}
        </p>
        <p className="card-text fs-4 mb-1  ">
            {price}
        </p>
        <button onClick={cheakOutBtnHandler}  className='btn w-25 btn-outline-success fw-bold'>
            CheckOut
          </button>
      </div>
    </div>
  </div>
</div>
    );
};

export default CourseDetails;