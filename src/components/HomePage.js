import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
      <HomeStyle>
          <LeftHome>
              <div className = "title"> <h1> ClockMates App</h1></div>
              <div className = "body">
                <p> This application helps your team to schedule meetings without the hassle of asking each person in the team.</p>
                 <p>With Clockmates, project managers or anyone willing to book a meeting can see other colleagues' availability and setup a meeting time when most of the employees have no other engagements.</p>
                 <p>Clockmates app also provides details about the availability of meeting rooms in your office. </p>
                <h3>"The goal of Clockmates app is to remove all the hassle in communication and let the team focus on the actual work to be accomplished "</h3>
              </div>
          </LeftHome>

          <RightHome>
                <AvailabiltiySection><h3>Your Upcoming Meetings</h3></AvailabiltiySection>
                <RoomBookingSection><h3> Your Booked Rooms </h3></RoomBookingSection>
          </RightHome>
      </HomeStyle>
  )
}

// Styled component
const HomeStyle = styled.div`
display:flex;
height: 600px;
`

const LeftHome = styled.div`

justify-content:center;
flex:60%;
background-color: #d3d3d3;

.title {
  display:flex;
  justify-content: center;
}
.body {
  padding: 0 40px 0 40px;
}
`

const RightHome = styled.div`
    display:flex;
    flex:40%;
`
const AvailabiltiySection = styled.div`
  flex:50%;
  border : black 1px solid;
  justify-content:center;
  display:flex;
  `
const RoomBookingSection = styled.div`
  flex:50%;
  border : black 0.1px solid;
  justify-content:center;
  display:flex;
  `
export default Home
