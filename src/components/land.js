import React, {Component} from 'react'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom';

export default class Land extends Component {
   /* constructor(props){
        super(props);
    }*/

    render() {
        let bstyle = {
            color:"black",
            fontSize:"20px"
            
        }
        let colr = {
            backgroundColor:"black"
        }
        return (
            <div className="land ">
                <p>
                    The most cherished gift is a life based on education.<br/>
                    A little Knowledge removes a lot of Ignorance
                </p>
                <div className="row justify-content-end align-items-end colr">
                    <div className="col-5">
                            <Button color='secondary'><Link style={bstyle} className="studentnav" to='/studentscorner'>Studentscorner</Link></Button>
                    </div>
                    <div className="col-4">
                            <Button color='secondary'><Link style={bstyle} className="studentnav" to='/admin'>Faculty</Link><br/></Button>
                    </div>
                </div>
            </div>
        )
    }
}
  