import PersonData from '../ContactsArray'
import './ContactList.css'

const ComponentName = () => {
   return (
      <h1>ContactList</h1>
   )
}

const ContactListGroupName = ({ groupName }) => {
   return (
      <h2>{groupName}</h2>
  )
}


const PersonalCard = ( props ) => {
   return (
      <article className='itemCnt'>
         <div className='itemDescript'>
           <img className="avatar__itemDescript" src="" alt="" />
            <div  className='mainDescriptData__itemDescript'>
              <h3  className='contactName__itemDescript'>{props.name}</h3>
               <p className='contactDescript__itemDescript'>{props.description}</p>
            </div>
         </div>
         <hr />
         <div className='itemMainData'>
            <p className='itemPhoneNr__itemMainData'>{props.tel}</p>
            { props.email !== undefined ? <p className='itemEmail__itemPhoneNr'>Email: {props.email}</p> : null}
         </div>
         <button className='deleteBtn'>delete</button>
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

const ContactList = () => {
   return (
      <>
         <ComponentName />
         <ContactListGroupName groupName="BusinessContacts" />
         <div className='listOfItems'>
            {PersonInfoElements}
         </div>
      </>
   )
}

export default ContactList;