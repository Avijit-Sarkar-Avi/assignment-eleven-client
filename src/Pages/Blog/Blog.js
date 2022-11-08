import React from 'react';
import UseTitle from '../../Hooks/UseTitle';
import Header from '../Shared/Header/Header';

const Blog = () => {
    UseTitle('Blog')
    return (

        <div>
            <Header></Header>

            <div className='mb-10'>
                <h1 className='text-2xl text-red-600'>1. Write difference between SQL and NoSQL?</h1>
                <p>SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>

            <div className='mb-10'>
                <h1 className='text-2xl text-red-600'>2. What is JWT and how does it work?</h1>
                <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                <p>Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key. User sign-in using username and password or google/facebook. Then
                    authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. After that User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header.
                    Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className='mb-10'>
                <h1 className='text-2xl text-red-600'>3. What is the difference between Javascript and NodeJS?</h1>
                <p>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.</p>
            </div>

            <div className='mb-10'>
                <h1 className='text-2xl text-red-600'>4. How does NodeJS handle multiple requests at the same time?</h1>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;