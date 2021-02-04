import React from 'react'

function Portfolio() {
    return (
        <main id="portfolio-container" className="container bg-white">            
            <div className="row ">
                <div className="col">
                    <h1 className="text-info about font-weight-bold  pt-4">
                        Portfolio
                    </h1>     
                    <hr/>              
                </div>               
            </div>     
            
            <div className="row ">                
                <div className="col-lg-6">                    
                    <figure>
                        <a href="https://girmad.github.io/Trip-Planner/" className="stretched-link" target="_blank"></a>
                        <img src="./assets/images/black-history.jpg" alt="" className="img-fluid rounded portfolio-image"/>                        
                    </figure>
                </div>               
                <div claclassNamess="col-lg-6">
                    <figure>
                        <a href="https://girmad.github.io/Responsive_Portfolio/index.html" class="stretched-link"  target="_blank"> </a>
                        <img src="./assets/images/girma-paris.jpg" alt="" class="img-fluid rounded portfolio-image"/>                       
                    </figure>
                </div>                                               
            </div>            
            <div className="row my-3">                               
                <div className="col-lg-6">
                    <figure>
                        <a href="https://girmad.github.io/Weather-Dashboard/" className="stretched-link" target="_blank"> </a>
                        <img src="./assets/images/girma-stockholm.jpg" alt="" className="img-fluid rounded portfolio-image"/>                       
                    </figure>
                </div>               
                <div className="col-lg-6">
                    <figure>
                        <a href="https://girmad.github.io/Code_Quiz/" className="stretched-link" target="_blank"></a>
                        <img src="./assets/images/younger-me.jpg" alt="" className="img-fluid rounded portfolio-image"/>                        
                    </figure>
                </div>                                               
            </div>
            
            <div className="row pb-5">
                <div className="col-lg-6">
                    <figure>
                        <a href="https://girmad.github.io/Work-day-scheduler/" class="stretched-link" target="_blank"></a>
                            <img src="./assets/images/girma-copenhagen.jpg" alt="" class="img-fluid rounded portfolio-image"/>                       
                    </figure>
                </div>                                                   
            </div>                    
        </main>
    )
}

export default Portfolio;