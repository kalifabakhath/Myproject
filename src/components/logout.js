import React from 'react';
import {logout} from '../redux/actions/actioncreators'
import { Button } from 'reactstrap';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
function Logout(props){
     let handlelogout=()=>{
         props.logout();
         props.history.push('/land')
       }
      return(
          <Button color='info' onClick={handlelogout()}></Button>
      )
}

export default withRouter(connect(null,{logout})(Logout))