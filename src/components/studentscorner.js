import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Scorner extends Component {
    
    render() {
      let br={borderRadius:"50px" ,border:"solid rgb(34, 85, 151)",width:"200px",height:"200px",padding:"15px"}
     
        return (
            <div className='sc'>
                <div className='row r1'>
                  <Link > 
                  <img className="academics cd "style={br} alt=" " src="/assets/icons/academics.png" /> 
                  </Link>
                
                  <Link >
                    <img className="hostel cd " style={br} alt=" " src="/assets/icons/hostel.png" />    
                  </Link>
             
                  <Link >
                    <img className="transport cd " style={br} alt=" " src="/assets/icons/transport.png" />                  
                  </Link>
              </div>  
              <div className='row r2 '>
                  <Link >
                    <img className="maintenance cd " style={br} alt=" " src="/assets/icons/maintenance.png"  />              
                  </Link>
            
                  <Link to="/studentscorner/food">
                    <img  className="food cd " style={br} alt=" " src="/assets/icons/food.png"  />              
                  </Link>
               
                  <Link>
                    <img  className="sports cd "style={br} alt=" " src="/assets/icons/sports.png"  />              
                  </Link>
              </div> 
          </div>
        )
    }
}
