import React from 'react'
import './style.css'

function About() {
    return (
      <div className="container mt-3 mt-3 pb-5 mb-5">
        <header className="row mx-1">         
            <div className="col-xs-10 col-md-8 bg-white">
                <h1 className="text-info pt-3 about">About Me</h1>
                <hr/>
            </div>
        </header>
        
        <div className="row mx-1">
            <div className="col-xs-10 col-md-8 bg-white">
              
                <img style={{width: '18rem', height: '18rem'}} id="about-image" className="float-left img-fluid p-2" src="images/younger-me.jpg" alt="Girma's head" />
                <p>My name is Girma D. Ebbsa. Currently, I am studying Full Stack Web Development bootcamp at University of Washington. I recently developed interest in software development and started taking courses both online and in class. First, I took Introduction to software development and testing at Hahu IT, Bellevue, WA. Then, I started taking Web developemt bootcamp course, JavaScript Algorith and Data Strucures Masterclass, JavaScript- A complete guide, Modern React with Redux, React - the complete guide on Udemy. This newly gained knowledge motivated me to start class at University of Washington(UW) coding bootcamp.</p>

                <p>I am currently on the edge of completing UW coding bootcamp. I am interested in jobs as a Full Stack, FrontEnd or BackEnd developer positions. MERN stack is the stack I am familiar with, however, i am open to learning other stacks as well. I am a fast learner and enjoy working in a team.</p>

                <p>My background is Economics. I have taken a bunch of Math, statistics and econometrics courses that taught me, more than anything, to be analytical. I believe my background gives me a unique perspective in the web developemt world.</p> 

                <p>I am a friendly person who enjoy interacting with people. I like having conversation about current topics. I am an ardent news reader. I sometimes believe I read too much news than I need. But it has helped me to understand the world I live in.</p>
                   
                <p>Interested to read more about me? Click on linkedin and github icons provided on the footer. </p>

                <p>Some of the projects I worked on can be accessed at Portfolio page. Each project is displayed in a card with propect image, title, short description and links to its respective github repo and deployed appilication </p>         
            </div>
        </div>
     </div>
    
    )
}
 export default About;