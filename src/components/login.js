import React,{Component} from 'react';
import {Control,LocalForm} from 'react-redux-form';
import {Link,withRouter} from 'react-router-dom';
//import {login} from '../redux/actions/actioncreators'
//import { connect } from 'react-redux';
import {Alert} from 'reactstrap';

/*const mapStateToProps = (state) => ({
  isAuthenticated:state.auth.isAuthenticated,
  error:state.errors
})*/

class Login extends Component  {
     constructor(props){
       super(props);
      // this.handlelogin=this.handlelogin.bind(this);
       this.state={msg:null}
     }
    /*componentDidUpdate(prevProps){
      let {error,isAuthenticated} = this.props;
      if(isAuthenticated){
         return this.props.history.push('/land')
      }
    }
    handlelogin (values){
          let{email,password}=values
          this.props.login({email,password});        
    }*/
    render(){
        return (
                <div className='login'>
                  <div className="log">
                    <h4 className="login-title col-md-auto">Login</h4>
                    <LocalForm className="form" /*onSubmit={(values) => this.handlelogin(values)}*/>
                      <Control.text model=".email" id="email" name="email"placeholder="email"/><br/>
                      <Control.password model=".password" id="password" name="password"placeholder="password"/><br/>
                      <button className='login-but log-but f6 f7-ns db'>Login</button>    
                    </LocalForm>
                    <Link to='/signup' className='account'>Create an Account</Link>
                  </div>
                </div>
      )}
    }
export default withRouter(/*connect(mapStateToProps,{login})*/(Login))