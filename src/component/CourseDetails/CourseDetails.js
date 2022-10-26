import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const {name,author,rating,price,img,duration,discription,lang}=useLoaderData();
    return (
        <div>
            
        </div>
    );
};

export default CourseDetails;