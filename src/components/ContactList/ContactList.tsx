import React from 'react'
import PersonData from '../ContactsArray'
import { ComponentName } from '../ComponentName/Componentname'
import { ContactListGroupName } from '../ContactListGroupName/ContactListGroupName'
import  "./ContactList.css"

const PersonalCard = (props: { name: string, description: string, tel: number | undefined, email: string | undefined }) => {

   return (
      <article className='itemCard'>
         <div className='itemDescript'>
            <img className="avatar__itemDescript" src="" alt="" />
            <div className='mainDescriptData__itemDescript'>
               <h3 className='contactName__itemDescript'>{props.name}</h3>
               <p className='contactDescript__itemDescript'>{props.description}</p>
            </div>
         </div>
         <hr />
         <div className='itemMainData'>
            {props.tel !== undefined ? <p className='itemPhoneNr__itemMainData'>Phone: {props.tel}</p> : null}
            {props.email !== undefined ? <p className='itemEmail__itemPhoneNr'>Email: {props.email}</p> : null}
         </div>
         <button className='deleteBtn' type='button'>delete</button>
      </article>
   )
   
}


const PersonInfoElements =  PersonData.map((person) => (
   <PersonalCard
      name={person.name}
      description={person.description}
      tel={person.tel}
      email={person.email} 
      key={person.key}
      />
 ))

const ContactList: React.FC = () => {
   
   return (
      <>
         <ComponentName content="" />
         <ContactListGroupName content="BusinessContacts" />
         <div className='listOfItems'>
            {PersonInfoElements}
         </div>
      </>
   )
}

export default ContactList;
