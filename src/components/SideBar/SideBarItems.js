import React from 'react'
import { Link } from 'react-router-dom';
import './SideBarItems.css';

function SideBarItems() {
    return (
        <div className="SideBarItems">
           <h4 className="title-text"> Quick Checkout....</h4>
           <hr/>
            <div className="SideBarItem">
               
             <img src="placement history2.png" alt="" height="40vw" width="40vw"/>
              
             <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p className="text">Placement History</p> </Link> 
            </div> 
            <div className="SideBarItem">
                <img src="placement history1.jpg" alt="" height="40vw" width="40vw"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p className="text">Placement Cell</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="college_curriculum.jpg" alt=""  height="40vw" width="40vw"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"> <p className="text">College Curriculum</p></Link>
            </div>
            <div className="SideBarItem">
                <img src="club2.png" alt=""  height="40vw" width="40vw"/>
                <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><p className="text">Clubs</p></Link>
            </div>

             {/* <div class="sidenav">
               
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/clients">Clients</Link>
                <Link href="/contact">Contact</Link>
            </div>
             */}
        </div>
    )
}

export default SideBarItems;
