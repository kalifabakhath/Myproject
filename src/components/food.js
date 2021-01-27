import React, { Component } from 'react';
import {connect} from "react-redux";
import {Addfood} from "../redux/actions/foodaction"
import {Control,LocalForm} from 'react-redux-form';
import {Label,Row,Col} from 'reactstrap';


let mapStatetoProps = (state) => ({
   email : state.auth.user.email
})
class Food extends Component {
  constructor(props){
      super(props);
      this.handlefood=this.handlefood.bind(this);
  }

  handlefood(values){
   let formdata = new FormData();
    formdata.append('email',this.props.email);
    formdata.append('foodplace',values.foodplace);
    formdata.append('description',values.description);
    formdata.append('image',values.image[0]);
    this.props.Addfood(formdata);
  }

  render() {
    return (
        <div>
              <div className="food">
                  <div className="foodcontent">
                  <h4 className="food-title col-md-auto">Food grievance</h4>
                  <LocalForm className="fform" onSubmit={(values) => this.handlefood(values)} encType="multipart/form-data" id="Foodform">
                      <Row className="form-group fp">
                        <Label htmlFor="foodplace">Food-Place :</Label>
                        <Col md={5}>
                            <Control.select model=".foodplace" id="foodplace" className="form-control">
                                <option>Kore</option>
                                <option>East Kore</option>
                                <option>Vallalar Maiyyam</option>
                                <option>Saradha Maiyyam</option>
                                <option>K's Cafe(Boys-Hotel)</option>
                                <option>K's Cafe(Girls-Hotel)</option>
                                <option>Munch-Box</option>
                                <option>CCD</option>
                                <option>Nescafe</option>
                            </Control.select>
                        </Col>
                      </Row>
                      <Row  className="form-group fd">
                        <Label htmlFor="description">Description    :</Label>
                        <Col md={5} >
                          <Control.textarea rows={8} cols={8} model=".description" id="description" name="description" className="form-control" /><br/>
                        </Col>
                    </Row>
                    <Row className="form-group" id="fim">
                        <Label htmlFor="Image">Image :</Label>
                        <Col md={5} >
                          <Control.file  model=".image" id="image" name="complaint_image" className="form-control-file" /><br/>
                        </Col>
                    </Row>
                        <Control.button className="btn btn-info mb-4 fbut" model="user" > Submit</Control.button>
                  </LocalForm>
              </div>
              </div>
        </div>
    )
}
}

export default connect(mapStatetoProps,{Addfood})(Food)