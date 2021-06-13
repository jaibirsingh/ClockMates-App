// Save selected date to store state

import React from 'react'
import actionCurrentDate from '../actions/actionCurrentDate'

// Define initial values for state
export function initialState() {
  return {
    selectedDate:'12/06/2021'
  }
}

// Reducer to update state with selected date from Calendar
const reducerCurrentDate = (state = initialState(), action) => {
  switch (action.type) {
    case 'GET_CURRENT_DATE':
      return {
        ...state,
        selectedDate: action.selectedDate
      }
    default:
      return state
  }
};

export default reducerCurrentDate
