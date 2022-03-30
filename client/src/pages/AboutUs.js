import React, { Component } from 'react';

class AboutUs extends Component{
    render(){
        return(
            <div>
            {/*  ur Company  */}
            <section className='section' style={{background:"linear-gradient(135deg, #F9E45B, pink)"}}>
            <div className="container" >
                <div className="row" >
                <div className="col-md-12 text-center" >
                <h3 className="main-heading">Our Company</h3>
                <div>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>                    
                </div>
              </div>
            </div>
            </section>
            {/*  vision mission and values  */}
            <section className='section bg-c-light border-top'>
            <div className="container">
                <div className="row">
                <div className="col-md-12 mb-4 text-center">
                <h3 className="main-heading">Vision, Mission and Values</h3>
                                 
                </div>
                <div className="col-md-4 text-center">
                    <h4>Our Vision</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              </div>
              <div className="col-md-4 text-center">
                    <h4>Our Mission</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              </div>
              <div className="col-md-4 text-center">
                    <h4>Our Core Value</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

              </div>
            </div>
            </div>
            </section>
            </div>
        )
    }
}

export default AboutUs;