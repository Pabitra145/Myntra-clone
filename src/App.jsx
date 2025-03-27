import './App.css'
import Header from './components/header'
import Footer from './components/Footer'
import {Outlet} from "react-router-dom"
function App() {
  return (
    <div>


      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}


export default App