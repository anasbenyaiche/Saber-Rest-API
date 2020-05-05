import React, { useState, useEffect } from "react";
import CardContact from "./cardContact";
import axios from "axios";

const ListContact = () => {
  const [usersDB, setUsersDB] = useState([]);

  useEffect(() => {
    async function getContacts() {
      const resp = await axios.get(`http://localhost:3001/contacts`);
      setUsersDB(resp.data);
    }
    getContacts();
  },[]);
  console.log(usersDB);
  return (
    <div className="list-content">
      {usersDB.map((user, index) => (
        <CardContact key={user._id} contact={user} />
      ))}
    </div>
  );
};

export default ListContact;
