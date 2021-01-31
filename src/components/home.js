import React, { Component } from 'react'
import Login from './login'
import logo from '../Images/logo.png'
export default class home extends Component {
    constructor(props){
        super(props);
        this.handlelogin=this.handlelogin.bind(this);
    }

    handlelogin(){
        alert('hello');
}

    render() {
        return (
            <div >
             <img className='logo' alt='Students-Support' src={logo}/>
             <Login/>
            </div>
)
        
    }


}