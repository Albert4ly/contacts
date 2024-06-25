import NavBar from './components/NavBar/NavBar'
import './App.css'

function ComponentName() {
  return (
    <div>
      <h1>ContactList</h1>
    </div>
  )
}

function ContactListGroupName({groupName}) {
  return (
    <div>
      <h2>{groupName}</h2>
    </div>
  )
}

function App() {

  return (
    <>
      <NavBar />
      <ComponentName />
      <ContactListGroupName groupName="BusinessContacts" />
    </>
  )
}

export default App
