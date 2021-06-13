// Action creator for fecthing current date

export const actionCurrentDate = {
  GET_CURRENT_DATE: function (selectedDate){
    return {
      type: 'GET_CURRENT_DATE',
      selectedDate
    }
  }
}
