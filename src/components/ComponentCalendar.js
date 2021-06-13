import React, {useState} from 'react'
import Calendar from 'react-calendar'

// Allows user to select a date and proceed for BookingDetails
// Pass selected date via 'props' to child component
const ComponentCalendar = (props) => {
  return (
    <div>
        <h2> Select a Date </h2>
        <Calendar onChange = {props.onSelected} value = {props.calDate} />
    </div>
  )
}

export default ComponentCalendar
