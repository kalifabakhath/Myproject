import React, { Component } from 'react';
import{Modal,ModalBody} from 'reactstrap';

export default class Quiz extends Component {
    constructor(){
        this.state={
            values:[]
        }
    }
    render() {
        return (
            <React.Fragment>
            <div>
                this.state.map(i)=>{
                    
                }
            </div>
            <div>
                <button>Add</button>
                <button>Submit</button>
            </div>
            <Modal>
                
            </Modal>
            </React.Fragment>
        )
    }
}
