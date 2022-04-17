import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
            <div className="blogs mx-auto fs-4">
                <p><span style={{color: 'red'}}>Question</span>: Difference between authentication and authorization</p>
                <p><span style={{color: 'green'}}>Answer</span>: Authentication is verify who is user.If He/she user then he/she will be access that website. And Authorization is Determines what resources   user can access that website.We are said Authentication is simple user and authorization is control whoWho can use what. </p>
            </div>
            <div className="blogs mx-auto fs-4 mt-2">
                <p><span style={{color: 'red'}}>Question</span>: Why are you using firebase? What other options do you have to implement authentication?</p>
                <p><span style={{color: 'green'}}>Answer</span>: Actually we are using firebase for authentication. Yes many options for authentication are available but I don't how to working Those, So firebase same options react firebase hooks, it's very easy to our uding for firebase authentication .</p>
            </div>
            <div className="blogs mx-auto fs-4 mt-2">
                <p><span style={{color: 'red'}}>Question</span>: What other services does firebase provide other than authentication</p>
                <p><span style={{color: 'green'}}>Answer</span>:Yes, A lot of services provide firebase.Firebase provide Hosting for live site ,  backend services, easy-to-use SDKs,Realtime database, storage,security rules,cloud firebase etc. Firebase many services provide</p>
            </div>
            </div>
        </div>
    );
};

export default Blogs;