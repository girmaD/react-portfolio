import React, { useState, useEffect} from 'react';
import './style.css';
import portfolio from '../../portfolio.json';

function Portfolio() {   
    const [data, setData] = useState([])
    
    useEffect(() => {
        setData(portfolio)
    }, [data])

    return (
        <div className="container pt-3 mt-3 pb-5 mb-5">
            <p className="h1">Some of my projects</p>            
            <div className="row pb-3 mb-3">                                     
                {data.map(item =>                                
                    <div className="col-lg-6 my-5"> 
                        <div key={item.id}  className="card" style={{width: "75%", height: "100%" }}>
                            <img src={item.src} style={{width: "100%", height: "50%" }} className="card-img-top" alt={item.title}/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.discription}</p>
                            </div>                            
                            <div className="card-body">                                
                                <button href={item.repo} className="btn btn-success my-1 mr-5">See Repo</button>
                                <button href={item.href} className="btn btn-success">See Live!!</button>
                            </div>
                        </div>
                    </div>
               
                )}            
            </div>
        </div>
    )  
}

export default Portfolio;