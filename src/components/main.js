import React, { Component } from 'react';
import {Switch,Route, Redirect} from 'react-router-dom';
import Header from './header';
import Sign from './sign';
import Scorner from './studentscorner';
import Login from './login';
import Land from './land';
import Mycomplaints from './mycomplaints';
import Food from './food';
import Admin from './admin';
import Foodadmin from './adminfood'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        isAuthenticated:state.auth.isAuthenticated,
        role:state.auth.user
    }
 }
 
class Main extends Component {

    render() {
                
        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.isAuthenticated && this.props.role.role === 'student'
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
            )} />
          );
          const MycomplaintsPrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.isAuthenticated && this.props.role.role === 'student'
                ? <Component {...props} />
                : "NOT AUTHORIZED"
            )} />
          );
           const FoodAdminPrivateRoute = ({ component: Component, ...rest }) => (
            <Route {...rest} render={(props) => (
              this.props.isAuthenticated && this.props.role.role === 'Faculty' 
                ? <Component {...props} />
                : <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                  }} />
            )} />
          );
          
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/land' component={Land}/>
                    <Route exact path='/login' component={Login} />     
                    <Route exact path='/signup' component={Sign} />
                    <PrivateRoute exact path='/studentscorner' component={Scorner}/>
                    <PrivateRoute exact path="/studentscorner/food" component={Food}/>
                    <MycomplaintsPrivateRoute exact path="/studentscorner/mycomplaints" component={Mycomplaints}/>
                    <FoodAdminPrivateRoute exact path='/admin' component={Admin}/>
                    <FoodAdminPrivateRoute exact path='/admin/food' component={Foodadmin}/> 
                    <Redirect to='/land'/>                  
                </Switch>
                
            </div>
        )
    }
}


export default connect(mapStateToProps)(Main)

