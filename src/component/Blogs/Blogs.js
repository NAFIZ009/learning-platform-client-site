import React from 'react';
import Card from 'react-bootstrap/Card';
const Blogs = () => {
    return (
        <Card style={{minHeight:'100vh'}}>
            <Card.Body className='container mx-auto '>
                <p className='fw-bold mb-0'>What is cors?</p>
                <p >Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources</p>
            </Card.Body>
            <Card.Body className='container mx-auto'>
                <p className='fw-bold mb-0'>Why are you using firebase? What other options do you have to implement authentication?</p>
                <p>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.</p>
            </Card.Body>
            <Card.Body className='container mx-auto'>
                <p className='fw-bold mb-0'>How does the private route work?</p>
                <p>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in)</p>
            </Card.Body>
            <Card.Body className='container mx-auto'>
                <p className='fw-bold mb-0'>What is Node? How does Node work?</p>
                <p>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
            </Card.Body>
        </Card>
    );
};

export default Blogs;