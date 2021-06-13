import React from 'react'
import ViewRoomBooking from './ViewRoomBooking'
import { useSelector } from 'react-redux'
import reducerCurrentDate from '../reducers/reducerCurrentDate'

// This fetch the selected date from store state using useSelector hook
const BookingDetails = () => {
    const currentDate = useSelector((state) => state.selectedDate)
    return(
        <ViewRoomBooking date = {currentDate} origin = "room-booking" />
    )
}
export default BookingDetails
