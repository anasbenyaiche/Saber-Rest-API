// import React, { useState } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const UpdateContact = ({ contact }) => {
//   const history = useHistory();
//   const [showPage, setShowPage] = useState(false);
//   const [updatedContact, setUpdatedContact] = useState({
//     name: "contact.name",
//     phone: "contact.phone",
//     email: "contact.email",
//   });

//   const updateContact = () => {
//     axios
//       .put(`http://localhost:3001/updateContact/${contact._id}`, updatedContact)
//       .then((resp) => {
//         history.push("/contacts");
//       })
//       .catch((error) => {
//         console.log(error.resp);
//       });
//   };

//   return (
//     <form style={{ marginTop: "15vh" }}>
//       <h2>Modify Contact</h2>
//       <div className="form-group">
//         <label htmlFor="input-name">Name</label>
//         <input
//           type="text"
//           className="form-control"
//           id="name"
//           placeholder="Enter Name..."
//           value={updatedContact.name}
//           onChange={(e) =>
//             setUpdatedContact({
//               ...updatedContact,
//               name: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="input-phone">Phone</label>
//         <input
//           type="number"
//           className="form-control"
//           id="telephone"
//           placeholder="Enter phone number..."
//           value={updatedContact.phone}
//           onChange={(e) =>
//             setUpdatedContact({
//               ...updatedContact,
//               phone: e.target.value,
//             })
//           }
//         />
//       </div>
//       <div className="form-group">
//         <label htmlFor="input-mail">Email address</label>
//         <input
//           type="email"
//           className="form-control"
//           id="email"
//           aria-describedby="emailHelp"
//           placeholder="Enter email..."
//           value={updatedContact.email}
//           onChange={(e) =>
//             setUpdatedContact({
//               ...updatedContact,
//               email: e.target.value,
//             })
//           }
//         />
//       </div>

//       <button
//         onClick={() => updateContact()}
//         type="button"
//         className="btn btn-primary"
//       >
//         Save changes
//       </button>
//     </form>
//   );
// };
// export default UpdateContact;
