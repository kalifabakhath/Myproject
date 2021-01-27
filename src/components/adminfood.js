import React, { Component } from 'react';
import {Card,CardBody,CardText,Button,CardImg,Container,ListGroup,ListGroupItem, CardHeader,CardFooter} from 'reactstrap';
import {connect} from 'react-redux';
import {Fade,Stagger} from 'react-animation-components';
import {Resolvefood} from '../redux/actions/foodaction';
import {store} from '../redux/configurestore';
import {Getfood} from '../redux/actions/foodaction';

const mapStateProps = (state) => ({
    Complaints:state.food.complaints,
})
class Foodadmin  extends Component {
    
    componentDidMount(){
        store.dispatch(Getfood());
       }
       
    constructor(props){
        super(props);
        this.handleResolve=this.handleResolve.bind(this);
    }

    handleResolve(_id){
        console.log("from client",_id);
         this.props.Resolvefood(_id);
    }

    render() { 
        let complaints = this.props.Complaints;
        let cardStyle = {
            margin:'5px',
            border:"solid 2px",
            backgroundColor:"rgb(108, 147, 219)"
        }
        return (
            <div className='sc'>
                <Stagger in>
                    <ListGroup>
                        {
                            complaints.map((complaint)=>{
                                if(complaint.resolved === false){
                                return (
                                    <Fade in key={complaint._id}>
                                       
                                        <Card style={cardStyle} className="text-center">
                                            <CardHeader>{complaint.email}</CardHeader>
                                            <CardBody>
                                            <CardHeader>{complaint.foodplace}</CardHeader>
                                                <CardText>
                                                {complaint.description}
                                                </CardText>
                                                <Button variant="info" onClick={(complaint) => this.handleResolve(complaint._id)} >Mark as resolved</Button>
                                            </CardBody>
                                            <CardFooter className="text-muted">{complaint.date.toString()}</CardFooter>
                                        </Card>
                                       
                                    </Fade>
                                )}
                            })
                        }
                    </ListGroup>
                </Stagger>
            </div>
        )
    }
}
 
export default connect(mapStateProps,{Resolvefood})(Foodadmin);