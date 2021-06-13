# Clockmates


## Description

This project is a quick demonstration of an app designed to schedule and check availability of meeting rooms by date. The app has been designed in ReactJS.

## Pre-requisites:

To run the project locally, the following should be installed on the system:

1. GIT
2. NodeJS/npm 


## Running the App

1) You can access the application deployed on the following link:

    [https://clockmatesapp.netlify.app/](https://clockmatesapp.netlify.app/)

2) Alternatively, to run the source code:

    a) Clone this repository into your local folder

    b) Open the 'clockmatesapp' folder

    c) Run 'npm start'. This runs the app in the development mode.

    d) Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Application Flow
By default, you will be directed to the application's home page which allows you to navigate to:
    
1. Home: This is the default page which gives a brief description of the application.

  2. Book Room: 

        a. This page allows you to select the desired date of the meeting you would like to schedule.

        b. On selecting a date, the page shows your selected date at the bottom, in addition to a button which redirects you to show the availability of the meeting room on the selected date. 

        c. You have the option to see the month, week, day and agenda view on the resulting calendar view. 

        d. Agenda view lists out the consecutive bookings linearly which is helpful when the meetings are associated to each other. 

3. Calendar: This page shows the meeting bookings in a calendar across the given month for anyone who wishes to take a quick glance at the available capacity of meeting spaces.

## Future Scope
1. The application could be expanded to allow employees to signup and login to maintain their personal calendars. 
2. The scheduler of the meeting would be able to enter the meeting participants. The application will use this information to calculate the required capacity of the meeting room and thereby filter out the appropriate room options. The application will then compare their individual calendars to return the most suitable meeting time and venue to the scheduler.

