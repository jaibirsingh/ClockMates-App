import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/HomePage'
import SetAvailability from './components/SetAvailabilityPage'
import RoomBooking from './components/RoomBookingPage'
import BookingDetails from './components/BookingDetails'
import MonthlyCalendar from './components/MonthlyCalendar'

import Nav from './components/Navbar'
import { links } from './utils/Constants'


function App() {
  // Define app urls and respective components to render
  return (
    <Router>
          <Nav items = {links}/>
          <Switch>
              <Route exact path = '/'>
                    <Home/>
              </Route>

              <Route exact path = '/setavailability'>
                    <SetAvailability/>
              </Route>

              <Route exact path = '/roombooking'>
                    <RoomBooking/>
              </Route>

              <Route exact path = '/bookingdetails'>
                    <BookingDetails/>
              </Route>

              <Route exact path = '/monthlycalendar'>
                    <MonthlyCalendar/>
              </Route>

          </Switch>
    </Router>
  );
}

export default App;
