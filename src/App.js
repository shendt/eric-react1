import React, { useState, useEffect } from 'react';
import './style.css';
import Form from './components/Form.js';
// import { v4 as uuid } from 'uuid';

export default function App() {
  const [contacts, setContacts] = useState([]);


  // fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setContacts(data);
  //     })

  useEffect(() => {
    console.log('hi') weird stuff
    if(contacts.length == 0){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        setContacts(data);
      })
    }
  },[])

  return (
    <div className="container">
      <h1>Contacts</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((c) => {
            return (
              <tr key={c.id}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Form setContacts={setContacts} contacts={contacts}/>
    </div>
  );
}
