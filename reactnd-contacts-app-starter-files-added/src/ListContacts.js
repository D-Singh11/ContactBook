import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {

    state = {
        query: ''
    }

    updateQuery= (event) => {
        this.setState({
            query : event.target.value.trim()
        });
    }

    render() {

        const {query} = this.state;
        const {contacts, removeContact } = this.props;

        const showingContacts = query === '' 
                                ? contacts 
                                : contacts.filter(contact => {
                                    return contact.name.toLowerCase().includes(query.toLowerCase())
                                });
        return (
            <div className="list-contacts">
                {JSON.stringify(this.state)}
                <div className='list-contacts-top'>
                    <input 
                        className='search-contacts'
                        type='text'
                        placeholder='serach a contact'
                        value={query}
                        onChange={this.updateQuery}
                    />
                </div>
                <ol className='contact-list'>
                {showingContacts.map(contact => (
                    <li key={contact.id} className='contact-list-item'>
                        <div className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>

                        <button className="contact-remove" onClick={() => {removeContact(contact)}}>
                            remove
                            </button>
                    </li>

                ))}
            </ol>
            </div>
        )
    }
}

ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact : PropTypes.func.isRequired
  };
export default ListContacts;
