import React, { Component } from 'react';
import {Card,CardBody,CardHeader,CardText,Button,ListGroup,CardFooter} from 'reactstrap';
//import {connect} from 'react-redux';
import {  Fade, Stagger } from 'react-animation-components';
//import {store} from '../redux/configurestore';
//import {Getfood} from '../redux/actions/foodaction';
/*const mapStateToProps = (state) => ({
    user:state.auth.user,
    Complaints:state.food.complaints
})*/
class Mycomplaints  extends Component {
    
   /* componentDidMount(){
        store.dispatch(Getfood());
       }*/
    render() { 
        //let complaints = this.props.Complaints;
        //let Email = this.props.user.email;
        let complaints = [
            {
                "_id":1234,
                "email":"abc@gmail.com",
                "foodplace":"Canteen",
                "description":"Looks expired ingredients",
                "date":"23/12/2020"
            }
        ]
        let cardStyle = {
            margin:'5px',
            border:"solid 2px",
            backgroundColor:"rgb(108, 147, 219)",
            fontFamily: 'Varela Round'
        }
        return ( 
        <div>
             <Stagger in>
                    <ListGroup>
                        {
                            complaints.map((complaint)=>{
                                
                                return (
                                    <Fade in key={complaint._id}>
                                       
                                        <Card style={cardStyle} className="text-center">
                                            
                                            <CardBody>
                                            <CardHeader>{complaint.foodplace}</CardHeader>
                                                <CardText>
                                                {complaint.description}
                                                </CardText>
                                                <CardText>{ complaint.resolved ? "your complaint has been resolved" : `your complaint has'nt been resolved` }</CardText>
                                                
                                            </CardBody>
                                            <CardFooter className="text-muted">{complaint.date.toString()}</CardFooter>
                                        </Card>
                                       
                                    </Fade>
                                )
                            })
                        }
                    </ListGroup>
                </Stagger>
        </div> 
        );
    }
}
 
export default /*connect(mapStateToProps,null)*/(Mycomplaints);