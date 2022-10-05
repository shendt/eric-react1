import React from 'react';
import './style.css';
import Form from './components/Form.js';

export default function App() {
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
          <tr>
            <td>name</td>
            <td>email</td>
            <td>website</td>
          </tr>
        </tbody>
      </table>
      <Form />
    </div>
  );
}
