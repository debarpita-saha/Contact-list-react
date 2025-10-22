import React, { useState, useEffect } from 'react';
import "./styles.css";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [newContact, setNewContact] = useState({ name: "", email: "", age: "", avatar: "" });

  // Fetch initial contacts
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=7")
      .then(response => response.json())
      .then(data => {
        setContacts(data.results);
      });
  }, []);

  // Handle adding a new contact
  const handleAddContact = () => {
    if (!newContact.name || !newContact.email || !newContact.age) return;

    const [firstName, lastName] = newContact.name.split(" ");
    const contactToAdd = {
      name: { first: firstName, last: lastName || "" },
      email: newContact.email,
      dob: { age: parseInt(newContact.age) },
      picture: { large: newContact.avatar || "https://via.placeholder.com/150" },
    };

    setContacts([contactToAdd, ...contacts]);
    setNewContact({ name: "", email: "", age: "", avatar: "" });
  };

  // Filter contacts based on search term
  const filteredContacts = contacts.filter(contact =>
    (contact.name.first + " " + contact.name.last).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Contact List</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search contact by name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* Add New Contact */}
      <div className="add-contact-form">
        <input
          type="text"
          placeholder="Full Name"
          value={newContact.name}
          onChange={e => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={e => setNewContact({ ...newContact, email: e.target.value })}
        />
        <input
          type="number"
          placeholder="Age"
          value={newContact.age}
          onChange={e => setNewContact({ ...newContact, age: e.target.value })}
        />
        <input
          type="text"
          placeholder="Avatar URL (optional)"
          value={newContact.avatar}
          onChange={e => setNewContact({ ...newContact, avatar: e.target.value })}
        />
        <button onClick={handleAddContact}>Add Contact</button>
      </div>

      {/* Contact List */}
      <div className="contact-list">
        {filteredContacts.map((contact, index) => (
          <ContactCard
            key={index}
            avatar={contact.picture.large}
            name={contact.name.first + " " + contact.name.last}
            email={contact.email}
            age={contact.dob.age}
          />
        ))}
      </div>
    </div>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>Toggle Age</button>
        {showAge && <p>Age: {props.age}</p>}
      </div>
    </div>
  );
};

export default App;

