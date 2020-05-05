import React from "react";
// import UpdateContact from "./updateContact";
import axios from "axios";
import { Link } from "react-router-dom";


const CardContact = ({ contact }) => {
  const deleteContact = () => {
    axios.delete(`http://localhost:3001/deleteContact/${contact._id}`);
  };

  return (
    <div className="list-contact">
      <div className="list-item">
        <h5>Name: {contact.name}</h5>
        <h5>Phone: {contact.phone}</h5>
        <h5>Email: {contact.email}</h5>
      </div>
      <div style={{ display: "flex" }}>
        <Link className='btn btn-success' to={`/contact/${contact._id}`}>Update contact</Link>
    
        <button
          onClick={() => deleteContact()}
          type="button"
          className="btn btn-danger btn-sm"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default CardContact;
