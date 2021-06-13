import React, {useState} from  'react';
import ViewRoomBooking from './ViewRoomBooking'
import { useSelector } from 'react-redux'

// Display month view for the selected date
const MonthlyCalendar = () => {
  // Fetch selected date from redux state
  const currentDate = useSelector( (state) => state.selectedDate)

  return (
    <ViewRoomBooking date = {currentDate} origin = "nav-bar"/>
  )
}

export default MonthlyCalendar
