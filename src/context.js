import React, {Component} from "react";

const Context = React.createContext();

const reducer =(state,action) =>{
    switch(action.type){
        case 'DELETE_CONTACT' : 
        return {
            contacts : state.contacts.filter(contact =>

            contact.id !== action.payload)
        };
        case 'ADD_CONTACT' :
            return {
                contacts: [action.payload,...state.contacts]
            }
        default:
            return state;
    }
}

export class Provider extends Component {
    state = {
        contacts:[
            {  
                id:1,
                nom: "Richard haddad",
                email:"ric@gmail.fr",
                tel: "555-555-555"
            },
            {   
                id:2,
                nom: "Nadege Mathieu",
                email:"nad@gmail.fr",
                tel: "556-556-556"
            },
            {
                id:3,
                nom: "Guy Mathou",
                email:"guy@gmail.fr",
                tel: "557-557-557"
            }
        ],
        dispatch: action =>{
            this.setState(state => reducer(state,action))
        }
    }
    render(){
        return(
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}
export const Consumer = Context.Consumer;