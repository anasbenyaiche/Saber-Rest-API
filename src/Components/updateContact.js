// import React, { useState, useEffect } from "react";
// import axios from "axios";

// const UpdateContact = (props) => {
//  const { contact } = props
//   const [updatedContact, setUpdatedContact] = useState({
//     id: contact._id,
//     name: contact.name,
//     phone: contact.phone,
//     email: contact.email,
//   });
//  ;

//   const updateContact = () => {
//     axios
//       .put(`http://localhost:3001/updateContact/${id}`, updatedContact)
//       .then((resp) => {
//         console.log(resp);
//       })
//       .catch((error) => {
//         console.log(error.resp);
//       });
//   };

//   return (
//     <div>
//       <div>
//         <div className="modal-content">
//           <div className="modal-body">
//             <div>
//               <label>Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="name"
//                 value={updatedContact.name}
//                 onChange={(e) =>
//                   setUpdatedContact({
//                     ...updatedContact,
//                     name: e.target.value,
//                   })
//                 }
//               />
//             </div>
//             <div>
//               <label>Phone</label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="telephone"
//                 value={updatedContact.phone}
//                 onChange={(e) =>
//                   setUpdatedContact({
//                     ...updatedContact,
//                     phone: e.target.value,
//                   })
//                 }
//               />
//             </div>
//             <div>
//               <label>Email address</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 aria-describedby="emailHelp"
//                 value={updatedContact.email}
//                 onChange={(e) =>
//                   setUpdatedContact({
//                     ...updatedContact,
//                     email: e.target.value,
//                   })
//                 }
//               />
//             </div>
//           </div>
//           <div className="modal-footer">
//             <button
//               type="button"
//               className="btn btn-secondary"
//               data-dismiss="modal"
//             >
//               Close
//             </button>
//             <button
//               onClick={() => updateContact()}
//               type="button"
//               className="btn btn-primary"
//             >
//               Save changes
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default UpdateContact;
