import React from 'react'

function Contact() {
    return (
        <main className="container py-5 my-5">
        <div className="row ">               
            <div className="col-md-8">                          
                <div className="card px-3"> 
                    <div className="card-body">                      
                        <h1 className="card-title text-info about">Contact</h1>
                        <hr/>                        
                        <form action="mailto:girma.derib@gmail.com" method="get" encType="text/plain">
                            <div className="form-group">                              
                              <label htmlFor="usr">Name:</label>                
                              <input type="text" className="form-control" id="usr" placeholder="Name" required/>

                              <label htmlFor="email">Email:</label>
                              <input type="email" className="form-control" id="email" placeholder="Email" required/> 

                              <label htmlFor="message">Message:</label>
                              <textarea className="form-control" rows="5" id="message" placeholder="Message" required></textarea>
                               <button className="btn btn-lg btn-info rounded-0 mt-3" type="submit">Submit</button>
                            </div>                            
                        </form>  
                    </div>
                </div> 
            </div>            
        </div>
    </main>
    )
}
export default Contact;
