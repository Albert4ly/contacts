import PersonData from "../ContactsArray";
import { useState } from "react";

const AddContactsForm = () => {
   const [contactsList, setContact] = useState({PersonData});
   const [nameValue, setName] = useState("");
   const [descriptionValue, setDescription] = useState("");

   const handleInputChange = (e) => {
      const { value } = e.target;
      setName(value);
   }

   const handleDescriptionInputChange = (e) => {
      const { value } = e.target;
      setDescription(value);
   }

   const itOb = {
   
   }

 
   
   const handleButtonClick = () => {
      setContact([nameValue, descriptionValue])
      itOb.name = nameValue;
      itOb.description = descriptionValue;
        PersonData.push(
         itOb
        )
   }

   return (
      <form className="addContactsForm">
         <input type="text" className="inputName__addContactsForm" value={nameValue} placeholder="name" onChange={handleInputChange} required />
         <input type="text" className="inputDescription__addContactsForm" value={descriptionValue} placeholder="description" onChange={ handleDescriptionInputChange } required/>
         <button type="button" className="addBtn__addContactsForm" onClick={handleButtonClick} >Add</button>
      </form> 
   )
}

export default AddContactsForm