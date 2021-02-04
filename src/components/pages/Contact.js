import React from 'react'

function Contact() {
    return (
        <main  className="container py-5 my-5">
        <div className="row ">               
            <div className="col-md-8">
                          
                <div className="card px-3"> 
                    <div className="card-body">                      
                        <h1 clclassNameass="card-title text-info about">Contact</h1>
                        <hr/>                        
                        <form action="mailto:girma.derib@gmail.com" method="get" enctype="text/plain">
                            <div className="form-group">                              
                              <label for="usr">Name:</label>                
                              <input type="text" class="form-control" id="usr" placeholder="Name" required/>

                              <label for="email">Email:</label>
                              <input type="email" class="form-control" id="email" placeholder="Email" required/> 

                              <label for="message">Message:</label>
                              <textarea class="form-control" rows="5" id="message" placeholder="Message" required></textarea>
                               <button class="btn btn-lg btn-info rounded-0 mt-3" type="submit">Submit</button>
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
