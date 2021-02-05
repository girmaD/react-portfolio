import React, { useState} from 'react'
import './style.css'

function Portfolio() {
    let initialState = [
        {
          src: 'images/portfolioImages/whaleWatching.png',
          href: 'https://fathomless-springs-89027.herokuapp.com/sightings'
        },
        {
          src: 'images/portfolioImages/tripPlanner.png',
          href: 'https://girmad.github.io/Trip-Planner/'
        }
      ]
      const [dataArr, setDataArr] = useState(initialState)
    return (
        <main className="portfolio-container container bg-white">            
            <div className="row ">
                <div className="col">
                    <h1 className="text-info about font-weight-bold  pt-4">
                        Portfolio
                    </h1>     
                    <hr/>              
                </div>               
            </div>
             {dataArr.map(item=> {                  
                 <div className="row ">                
                    <div className="col-lg-6">                    
                        <figure>
                            <a href={item.href} className="stretched-link" target="_blank"></a>
                            <img src={item.src} alt="" className="img-fluid rounded portfolio-image"/>                        
                        </figure>
                    </div>                                                              
                </div>
             }) }               
            {/* <div className="row ">                
                <div className="col-lg-6">                    
                    <figure>
                        <a href="https://girmad.github.io/Trip-Planner/" className="stretched-link" target="_blank"></a>
                        <img src="./assets/images/black-history.jpg" alt="" className="img-fluid rounded portfolio-image"/>                        
                    </figure>
                </div>               
                <div className="col-lg-6">
                    <figure>
                        <a href="https://girmad.github.io/Responsive_Portfolio/index.html" className="stretched-link"  target="_blank"> </a>
                        <img src="./assets/images/girma-paris.jpg" alt="" className="img-fluid rounded portfolio-image"/>                       
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
                        <a href="https://girmad.github.io/Work-day-scheduler/" className="stretched-link" target="_blank"></a>
                            <img src="./assets/images/girma-copenhagen.jpg" alt="" className="img-fluid rounded portfolio-image"/>                       
                    </figure>
                </div>                                                   
            </div>                     */}
        </main>
    )
}

export default Portfolio;