import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {

  state = {
    contacts : []
    }

    componentDidMount() {
      ContactsAPI.getAll().then(contactsFromAPI => {
        this.setState({
          contacts: contactsFromAPI
        });
      })
    }

  removeContact = (contact) => {
    
    this.setState((currentState) => ({
      contacts : currentState.contacts.filter(c => {
        return contact.id != c.id
      })
    }))

    ContactsAPI.remove(contact);
    console.log(this.state);
  }


  render() {
    return (
      <div>
        <ListContacts contacts={this.state.contacts} removeContact={this.removeContact}/>
      </div>
    );
  }
}

export default App;
