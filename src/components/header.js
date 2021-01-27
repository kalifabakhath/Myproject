import React, { Component } from 'react'
import {Navbar,NavbarBrand,Button,ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { withRouter,Link} from 'react-router-dom'
import { connect } from 'react-redux';
import {logout} from '../redux/actions/actioncreators'

const mapStateToProps = (state) => ({
    isAuthenticated:state.auth.isAuthenticated,
    user:state.auth.user
})

 class Header extends Component {
    constructor(props){
        super(props);
        this.state={
           isopen:false
        };
        this.togglenav=this.togglenav.bind(this);
        this.handlelogout=this.handlelogout.bind(this);
    }

    togglenav(){
        this.setState({
            isopen:!this.state.isopen
        })
    }
    
    handlelogout=()=>{
      this.props.logout();
      this.props.history.push('/land')
    }
    render() {
        let sgss={color:"white"}
        return (
            <div className="head">
            <Navbar color="black" light>
              <NavbarBrand style={sgss}href="/" className="mr-auto homenav">SAPP</NavbarBrand>
              {this.props.isAuthenticated ?
              this.props.user.role=="Foodadmin"?(
                <ButtonDropdown isOpen={this.state.isopen} toggle={this.togglenav}>
                <Button id="caret" color="primary">{this.props.user.username.toUpperCase()}</Button>
                <DropdownToggle caret color="primary" />
                <DropdownMenu>
                  <DropdownItem onClick={this.handlelogout}>Logout</DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              ):(
                <ButtonDropdown isOpen={this.state.isopen} toggle={this.togglenav}>
                  <Button id="caret" color="primary">{this.props.user.username.toUpperCase()}</Button>
                  <DropdownToggle caret color="primary" />
                  <DropdownMenu>
                  <DropdownItem ><Link to='/studentscorner/mycomplaints'>mycomplaints</Link></DropdownItem>
                    <DropdownItem onClick={this.handlelogout}>Logout</DropdownItem>
                  </DropdownMenu>
                </ButtonDropdown>
              ):
              (<Button color='Info' outline ><Link to='/login'>LOGIN</Link></Button>)
              }
            </Navbar>
          </div>
          
        );
      
        
    }
}

export default withRouter(connect(mapStateToProps,{logout})(Header))