import React from 'react'; 
import {render} from 'react-dom';
import ContactsList from './ContactsList';

//import ControlledForm from './ControlledForm';


// Mock Data 
let contacts =  [
    {
        "id": 1,
        "name": "Hector", 
        "phone": "123 123 1234"
    }, 
    {
        "id": 2,
        "name": "David", 
        "phone": "122 122 1222"
    }, 
    {
        "id": 3,
        "name": "Pedro", 
        "phone": "999 999 1234"
    }, 
    {
        "id": 4,
        "name": "Tim", 
        "phone": "999 888 1234"
    }    
];

class App extends React.Component {        
    render() {                
        return (
            <div>
                <span className="label">Contact List</span>
                <ContactsList contacts={this.props.contacts} />
            </div>            
        )
    }
}

render(<App contacts={contacts} />, document.getElementById('app'));
 