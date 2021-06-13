import React from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import events101 from '../utils/eventsRoom101'
import events102 from '../utils/eventsRoom102'
import events103 from '../utils/eventsRoom103'
import moment from 'moment'
import '../../node_modules/react-big-calendar/lib/css/react-big-calendar.css'
import { useSelector, connect } from 'react-redux'
import '../styles/viewRoomBooking.css'


moment.locale("en")

/* This component displays meeting tiles for existing data and also allows user to
create new meetings and display it using Calendar component from react */
export default class ViewRoomBooking extends React.Component {
  constructor(props) {
    super(props)
    this.state = { events: events101 }
    this.updateRoomEvents = this.updateRoomEvents.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

// This adds new meeting object to the component state
  handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter the meeting title')
    if (title)
      this.setState({
        events: [
          ...this.state.events,
          {
            start,
            end,
            title,
          },
        ],
      })
  }

// Updates meeting information base on room selection
  updateRoomEvents = (events) => {
    this.setState({
      events: events})
  }

  render() {
    const localizer = momentLocalizer(moment)
    const date = this.props.date
    const splitDate = date.split('/')

    return (
      <div style={{height:"500px"}}>
        <div className='rooms'>
          <button onClick={() => this.updateRoomEvents(events101)}>Room 101</button>
          <button onClick={() => this.updateRoomEvents(events102)}>Room 102</button>
          <button onClick={() => this.updateRoomEvents(events103)}>Room 103</button>
        </div>
        {this.props.origin == "nav-bar" ?
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView = {Views.MONTH}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate= { new Date (splitDate[2], splitDate[1]-1, splitDate[0]) }
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        /> :
        <Calendar
          selectable
          localizer={localizer}
          events={this.state.events}
          defaultView = {Views.DAY}
          scrollToTime={new Date(1970, 1, 1, 6)}
          defaultDate= { new Date (splitDate[2], splitDate[1]-1, splitDate[0]) }
          onSelectEvent={event => alert(event.title)}
          onSelectSlot={this.handleSelect}
        />}
      </div>
    )
  }
}
