import React, { Component } from 'react'
import {Control,LocalForm} from 'react-redux-form'
//import { connect } from 'react-redux';
//import {signup} from '../redux/actions/actioncreators'
import {Alert} from 'reactstrap'

/*const mapStateToProps = (state) => ({
    isAuthenticated:state.auth.isAuthenticated,
    error:state.errors
})*/
class Sign extends Component {
    constructor(props){
        super(props);
        this.handlesignin=this.handlesignin.bind(this)
        this.state={
          msg:null
        }
    }
    handlesignin(values){
      let {username,email,password,confirmpassword} = values;
     // this.props.signup({username,email,password,confirmpassword}) 
    }
    /*componentDidUpdate(prevProps){
      let {error,isAuthenticated} = this.props
      if(isAuthenticated){
        return this.props.history.push('/land')
     }
      if(error!=prevProps.error){
        if(error.id==="SIGN_UP_FAIL"){
        this.setState({msg:error.msg.msg})
        }else{
          this.setState({msg:null})
        }
      }
    }*/
    render() {
        return (
                <div id='sign'>
                    <h4 className="sign-title">Sign In</h4>
                    
                    <LocalForm className='container-fluid' onSubmit={(values) => this.handlesignin(values)} >
                    <span className='alertmessage'>{this.state.msg ? (<span>{this.state.msg}</span>):null}</span>
                      <div className = 'form-group row'>
                        <Control.text id='username' model='.username' placeholder='Username'/>
                      </div>
                      <div className = 'form-group row'>                        
                        <Control.text id='email' model='.email' placeholder="Email"/>
                      </div>
                      <div className = 'form-group row'>
                        <Control.password id='password' model='.password' placeholder="Passsword"  />
                      </div>
                      <div className = 'form-group row'>
                        <Control.password id='confirmpassword' model='.confirmpassword' placeholder="confirm-password" />
                      </div>
                      <button className='sign-but' >Sign In</button>
                   </LocalForm> 
                </div>
        )
    }
}
export default  /*connect(mapStateToProps,{signup})*/(Sign)