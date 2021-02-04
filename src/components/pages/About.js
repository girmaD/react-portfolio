import React from 'react'

function About() {
    return (
      <div id="about-container" className="container  pt-5">
        <header className="row mx-1">         
            <div className="col-xs-10 col-md-8 bg-white">
                <h1 className="text-info pt-3 about">About Me</h1>
                <hr/>
            </div>
        </header>
        
        <div className="row mx-1">
            <div className="col-xs-10 col-md-8 bg-white">
              
                <img style={{width: '18rem', height: '18rem'}} id="about-image" className="float-left img-fluid p-2" src="images/younger-me.jpg" alt="Girma's head" />
                <p>My name is Girma D. Ebbsa. Currently, I am studying Full Stack Web Development bootcamp and University of Washington. I, recently developed interest in software development and started taking courses both online and in class. First, I took Introduction to software development and testing at Hahu IT, Bellevue, WA. Then, I took a 47 hour Web developemt bootcamp course on Udemy. These newly gained knowledges motivated me to start class at University of Washington coding bootcamp.</p>

                <p>My background is Economics. I have taken a bunch of Math, statistics and econometrics courses that taught me, more than anything, to be analytical. I believe my background gives me a unique perspective in the web developemt world.</p> 

                <p>I am a friendly person who enjoy interacting with people. I like having conversation about current topics. I am an ardent news reader. I sometimes believe I read too much news than I need. But it has helped me to understand the world I live in.</p>
                   
                <p>Interested to read more about my career? Here you can <a href="./assets/resume_Girma.pdf">Download my resume!</a> Links to my social media accounts are provided in the footer.</p>
                
                <h4>Projects</h4>
                <ul>
                  <li><a href="https://github.com/watchNW/whale-watching">whale-watching </a> - an application in which users can post a whale sighting. The app sends text notification to all users when a new post is made. It is a collaboration with three other developers</li>
                  <li><a href="https://github.com/girmaD/Trip-Planner">Trip-planner</a> - a collaboration with three other developers</li>
                  <li><a href="https://github.com/girmaD/Weather-Dashboard">Weather-Dashboard</a> - A weather app that renders current and forecasted weather</li>
                  <li><a href="https://github.com/girmaD/Code_Quiz">Code-Quiz</a> - A timed quiz that stores and renders score at the end of the quiz</li>
                  <li><a href="https://github.com/girmaD/Work-day-scheduler">Work-day-scheduler</a> - A tool that hepls schedule your work day for each working hours</li>
                  <li><a href="https://cryptic-refuge-14844.herokuapp.com/">Eat-Da-Burger</a> - a burger logger appilication built with MySQL, Node, Express, Handlebars and a homemade ORM</li>
                </ul>
            </div>
        </div>
     </div>
    
    )
}
 export default About;