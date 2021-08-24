import React from 'react'
import  './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Project from './component/Project'
import Skills from './component/Skills'
import Navbar from './component/Navbar'
import {Switch,Route,Redirect} from 'react-router-dom' 

const App = () => {

 
  return (
    <div>
       <Navbar/>
        <Switch>
                 <Route exact path="/" component={Main}  />
                 <Route exact path="/home" component={Home}  />
                 <Route exact path="/about"  component={About} /> 
                 <Route exact path="/contact" component={Contact} />
                 <Route exact path="/project" component={Project} />
                 <Route exact path="/skills" component={Skills} />
                 <Redirect to="/" />
        </Switch>
    </div>
  )
}
export default App;