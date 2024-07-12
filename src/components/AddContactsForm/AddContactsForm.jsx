import PersonData from "../ContactsArray";
import { useState } from "react";

const AddContactsForm = () => {
   const [contactsList, setContact] = useState(PersonData);
   const [nameValue, setName] = useState("");

   // const [contactsList, setContact] = useState(PersonData);
   // const [descriptionValue, setDescrition] = useState("");

   const handleInputChange = (e) => {
      const { value } = e.target;
      setName(value);
   }
   
   const handleButtonClick = () => {
      setContact([nameValue])
      console.log([contactsList])
   }

   return (
      <form className="addContactsForm">
         <input type="text" className="inputName__addContactsForm" value={nameValue} placeholder="name" onChange={handleInputChange} required />
         {/* <input type="text" className="inputDescription__addContactsForm" value={descriptionValue} placeholder="description" onChange={ handleInputChange } required/> */}
         <button type="button" className="addBtn__addContactsForm" onClick={ handleButtonClick }>Add</button>
      </form>
   )
}

export default AddContactsForm