
import { createBrowserRouter } from 'react-router-dom';
import Blogs from '../component/Blogs/Blogs';
import CheckOut from '../component/CheckOut/CheckOut';
import CourseDetails from '../component/CourseDetails/CourseDetails';
import Courses from '../component/Courses/Courses';
import ErrorPage from '../component/ErrorPage/ErrorPage';
import FAQ from '../component/FAQ/FAQ';
import Login from '../component/Login/Login';
import Register from '../component/Register/Register';
import Home from '../Home/Home';
import Main from '../Layout/Main';

const Route=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path: '/',
                element:<Home/>
            },
            {
                path:'/courses',
                loader:()=>fetch('https://eduworld-server.vercel.app/courses'),
                element:<Courses/>
            },
            {
                path:'/courses/:id',
                loader:({params})=>fetch(`https://eduworld-server.vercel.app/courses/${params.id}`),
                element:<CourseDetails/>
            },
            {
                path:'/faq',
                element:<FAQ/>
            },
            {
                path:'/blogs',
                element:<Blogs/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/checkout/:id',
                loader:({params})=>fetch(`https://eduworld-server.vercel.app/courses/${params.id}`),
                element:<CheckOut/>
            },
            {
                path:'*',
                element:<ErrorPage/>
            }
        ]
    }
])

export default Route;