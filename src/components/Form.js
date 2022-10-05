import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default function Form(props) {
  let [contact, setContact] = useState({
    name: '',
    email: '',
    website: '',
  });

  function handleSubmit(e) {
    e.preventDefault();
    if (Object.values(contact).some((c) => c === '')) {
      alert('Fields cannot be empty!');
      return;
    }
    props.setContacts([...props.contacts, { ...contact, id: uuid() }]);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Contact Form</h1>
      <input
        className="input"
        placeholder="Name"
        onChange={(e) =>
          setContact({
            ...contact,
            name: e.target.value,
          })
        }
      />
      <input
        className="input"
        placeholder="Email"
        onChange={(e) =>
          setContact({
            ...contact,
            email: e.target.value,
          })
        }
      />
      <input
        className="input"
        placeholder="Website"
        onChange={(e) => setContact({ ...contact, website: e.target.value })}
      />
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
}
