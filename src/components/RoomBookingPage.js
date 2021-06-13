import React, {useState} from 'react'
import styled from 'styled-components'

import '../styles/RoomBookingPage.css'
import ComponentCalendar from './ComponentCalendar'
import {useDispatch} from 'react-redux';
import {actionCurrentDate} from '../actions/actionCurrentDate'
import { Link } from 'react-router-dom'

const RoomBooking = () => {
  const [calDate, setCalDate] = useState(null)
  const dispatch = useDispatch()

// convert Date value to string for displaying purposes
  const getDateFormat = (date) => {
    if(calDate != null) {
      const month = calDate.getMonth() + 1
      return (
        calDate.getDate() + "/" + month + "/" + calDate.getFullYear()
      )
    }
  }

  const onSelected =  (calDate) => {
    setCalDate(calDate)
  };

  return(
    <div className = "calendarBody">
      <ComponentCalendar onSelected = {onSelected} calDate = {calDate}/>
      {calDate ? (
          <div>
              <h3> Selected date: {getDateFormat(calDate)} </h3>
              <button onClick =
                        {() => dispatch(actionCurrentDate.
                                  GET_CURRENT_DATE(getDateFormat(calDate)))}>
                                  <Link style={{ textDecoration: 'none' }} to ="/bookingdetails">
                        Check Room Availability </Link> </button>
          </div>
        ): (
          <div>
            <h4>No Date Selected</h4>
          </div>
        )
      }
    </div>
  )
}

export default RoomBooking
