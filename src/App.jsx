import NavBar from './components/NavBar/NavBar'
import ContactList from './components/ContactList/ContactList'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div className='componentsCnt'>
        <ContactList />
      </div>
    </>
  )
}

export default App
