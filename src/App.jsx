import Dashboard from "./components/dashboard"
import Nav from "./components/navigation"
import "./style.css"
import "./App.css"


export default function App(){
  return(
    <>  
    <div className="app-main">  
      <div className="nav-comp">
    <Nav/>
    </div>
    <Dashboard/>
    </div>
    </>
  )
}