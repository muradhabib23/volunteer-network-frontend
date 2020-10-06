import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Login from './Login/Login';
import Header from './Header/Header';
import Home from './Home/Home';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Register from './Register/Register';
import RegisteredEvents from './RegisteredEvents/RegisteredEvents';
import Admin from './Admin/Admin';

export const UserContext = createContext([])
export const SelectedEventContext = createContext([])
export const AllEventContext = createContext([])

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})
  const [selectEvent, setSelectEvent] = useState('')
  const [allEvents, setAllEvents] = useState([])

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <SelectedEventContext.Provider value={[selectEvent, setSelectEvent]}>
      <AllEventContext.Provider value={[allEvents, setAllEvents]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Header/>
              <Home/>
            </Route>
            <Route exact path="/">
              <Header/>
              <Home/>
            </Route>
            <Route path="/login">
             <Login/>
            </Route>
            <PrivateRoute path="/register">
             <Register/>
            </PrivateRoute>
            <Route path="/registeredEvents">
            <RegisteredEvents/>
            </Route>
            <Route path="/admin">
            <Admin/>
            </Route>
          </Switch>
        </Router>
        </AllEventContext.Provider>
      </SelectedEventContext.Provider>
    </UserContext.Provider>
  );
}
export default App;
