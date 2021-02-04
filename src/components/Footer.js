import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-muted py-3 text-center footer">  
        <div className="container text-center">          
         <a className="text-white"  href="https://girmad.github.io/">&#169;Girma-2021</a> 
         <div className="icons float-right pr-5">              
              <a className="text-white mr-2" href="https://www.linkedin.com/in/girma-ebssa-23aa801b5/" target="_blank">
                  <i className="fab fa-linkedin"></i>
              </a>
              <a className="text-white" href="https://github.com/girmaD" target="_blank">
                  <i className="fab fa-github"></i>
              </a>             
          </div>  
        </div>      
      </footer>    
    )
}

export default Footer;