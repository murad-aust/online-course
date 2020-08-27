import React from 'react';
//import logo from '../../images/logo.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

const Header = () => {
    return (
        
        <div className= "container "> 
            <nav className = "navbar navbar-expand-lg navbar-light">  
              
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                
                 <div className="collapse navbar-collapse float-md-right" id="navbarNav">
              
                  <ul className="navbar-nav ml-auto ">
                   
                    <li className="nav-item">
                      <a className="nav-link" href="/course">Courses</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/">Others</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/blog">Blog</a>
                    </li>
                    
                      <button className="sign-btn" type="button">Sign in</button>
                    
                    
                  </ul>
                 
                </div>
            </nav>
                
        </div>
    );
};

export default Header;