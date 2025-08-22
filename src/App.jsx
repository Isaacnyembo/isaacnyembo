
import './App.css'
import Body from './components/Body'
import Contact from './components/Contact'
import NavBar from './components/NavBar'
import Services from './components/Services'
import About from './components/About'
function App() {
 

  return (
    <div className='bg-light'>
      <NavBar/>
      <Body/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default App
