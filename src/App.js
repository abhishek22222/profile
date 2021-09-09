import React from 'react'
import './App.css';

// import SideBar from './components/SideBar/SideBar';

 import NavBar from './components/NavBar';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
  import Home from './components/Pages/Home/Home';
  import Companies from './components/Pages/Companies/Companies';
  import AddQuestions from './components/Pages/AddQuestions/AddQuestions';
  import Answers from './components/Pages/Answers/Answers';
  import Notification from './components/Pages/Notification/Notification';
  import Login from './components/Pages/Login/Login';
  import Profile from './components/Pages/Profile/Profile';
  import SearchBar from './components/Pages/SearchBar';
//import SideBar from './components/SideBar/SideBar';
 
function App() {
  return (
    <div className="App">
       <Router>
           <NavBar/>
             <Switch>
                 <Route path="/home"><Home /></Route>
                 <Route exact path="/companies"><Companies/></Route>
                 <Route exact path="/Question"><AddQuestions/></Route>
                 <Route exact path="/ans"><Answers/></Route>
                 <Route exact path="/notifications"><Notification/></Route>
                 <Route exact path="/search"><SearchBar/></Route>
                 <Route exact path="/login"><Login/></Route>
                 <Route exact path="/profile"><Profile/></Route>
             </Switch>
       </Router>
       {/* <div className="sidebar">
         <SideBar/>
       </div> */}
    </div>
  );
}

export default App;
