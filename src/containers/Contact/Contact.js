import React, { Component } from 'react';
import {Consumer} from '../../context';

class Contact extends Component {

    state ={
        show:false
    }

    supprimeContact = (id, dispatch) => {
       dispatch({type:'DELETE_CONTACT', payload:id})
       
    }
    
    montrerContact =() =>{
        this.setState({
            show: !this.state.show
        })
        
    }
    
    render (){

        return(
            <Consumer>
                {value => {
                    return(
            <div className="card card-body mb-3 text-center">

                <h4>{this.props.nom}&nbsp; <i style={{cursor:'pointer'}} className="fas fa-sort-down"
                onClick={this.montrerContact}></i>
                 <i className="fas fa-times" style={{cursor:'pointer', float:'right',
                color:'red'}} onClick={() =>this.supprimeContact(this.props.id, value.dispatch)}></i>
                </h4>
                {this.state.show ? (
                    <ul className="card card-body mb-3">
                        <li className="list-group-item">
                            Email : {this.props.email}

                        </li>
                        <li className="list-group-item">
                            Téléphone : {this.props.tel}
                            
                        </li>
                </ul>
                ) : null}
                
            </div>

                    )
                }}
            </Consumer>
        )
     }
 }

export default Contact;