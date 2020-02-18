# Project Overview

![Flying Four](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_532/v1581716915/flying-four_sa1li3.jpg)

## Project Description

Introducing the Flying Four: Disney, Jeff, Jenn, and Ro. We are building out a new feature for Expedia, which allows users to search for a bundled Flight, Hotel and Car vacation package with the option to search for an eco-friendly hotel. The search form will include a checkbox option to include only eco-friendly options. The hotel search results list will include a tree icon that indicates it is eco-friendly.

As a team, we decided to not split responsibilities front-end vs. back-end. We will divide our work into mini-sprints where we will complete back-end together as a group first, then move onto front-end. Jenn will be the scrum master to keep the group on deadline and Jeff will be the git tsar.

## Wireframes

[wireframes from UX](https://projects.invisionapp.com/share/MBVIJQ9VUYN#/screens/400362146)

## MVP

- User will be able to click on “Bundle & Save” icon and “Flight + Hotel + Car” button to start search (only active links)
- User can search for packages with a form - departure city, destination city, departure date, return date, number of travelers, checkbox for “I want to only see eco-friendly hotels”
- Site will be mobile-first and responsive for desktop as well
- When Search is clicked, user will be able to browse through hotel options (limit to 4 results)
- When Hotel is clicked, user will be able to view room options (limit to 2 results)
- At the end, user can click a button to book and will be shown a simple confirmation screen
- Link to “List A Property” will provide admin access to create, update and delete Hotels

## Post-MVP

- Additional functionality to get other packages (i.e. “Flight + Hotel” or “Hotel Only”) with additional routes
- Add React components and routes for departure flight options, return flight options and car options
- Add Create and Update functionality for our Rooms model
- Add models to database for Flights and Cars
- Add model for Users and Trips to save booked trips
- Build out second form in the user flow to add traveler details and book a trip

## ERD Diagram

![ERD](https://res.cloudinary.com/db0kbxvhr/image/upload/v1581715284/erd-flying-four-p3_pt4zvn.png)

## Endpoints

- `GET /api/cities`

..\* returns a list of city names

- `GET /api/cities/:city/hotels`

..\* returns a list of hotels in the specified city

- `GET /api/hotels/:hotel`

..\* returns details about the specified hotel

- `GET /api/hotels/:hotel/rooms`

..\* returns a list of rooms in the specified hotel

- `GET /api/hotels/:hotel/rooms/:room`

..\* returns details about the specified hotel room

- `POST /api/hotels`

..\* add a new hotel

- `POST /api/hotels/:hotel/rooms`

..\* add a new room to an existing hotel (post-MVP)

- `PUT /api/hotels/:hotel`

..\* update hotel info

- `PUT /api/hotels/:hotel/rooms/:room`

..\* update hotel room info (post-MVP)

-`DELETE /api/hotels/:hotel`
..\* remove a hotel from the DB

## Sample JSON from `GET /api/hotels/:hotel`

```
[
 {
   "id": 1,
   "name": "Beck's Motor Lodge",
   "address": "2222 Market St, San Francisco, CA 94114",
   "city_id": 3,
   "rating": 4,
   "img_url": "https://thisisnotarealurl.com/images/fi2J6gP1.jpg",
   "description": "Newly renovated rooms! Located in the heart of the Castro, Beck's Motor Lodge is surrounded by charming tree lined streets, unique restaurants and lively nightlife. We have a private sundeck where you will enjoy lovely views of the city. Public transportation via the historic streetcar is available outside your door.",
   "wifi":true,
   "business":false,
   "laundry":false,
   "smoke_free":true,
   "eco_friendly": true
   "rooms": [
             {
               "id": 5,
               "hotel_id": 2,
               "room_number": 416,
               "availability": true,
               "list_price": "$124.95",
               "current_price": "$112.49",
               "beds": "2 QUEEN",
               "sleeps": 4
             },
```

## React Component Hierarchy

[Component Hierarchy on Whimsical](https://whimsical.com/GekeXdAdXyDUdWo7NWzE7B)

![Component Hierarchy](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,h_600/v1581881153/component-hierarchy-expedia_ssospk.png)

## Components

| Component          | Description                                                                                                                     |
| ------------------ | :------------------------------------------------------------------------------------------------------------------------------ |
| App                | This component will render the Home, Navbars and Main Routes. It will be a class component that uses state to store hotel info. |
| Home               | This component is where users will be directed when they first enter the page                                                   |
| Layout             | This component is a shared component that will contain our LogoNav and render on every route                                    |
| LogoNav            | This component will house a nav bar exposing the expedia logo.                                                                  |
| SearchForm         | This component will allow the user to place in the required information to query their search results                           |
| SearchNavVacations | This component will allow users to query their searches as well with one click of a button.                                     |
| SearchNavOptions   | This component will also allow users another way to query their search.                                                         |
| HotelList          | This is a class component that will set the state.                                                                              |
| AdminForm          | This will be for our crud                                                                                                       |

## Priority Matrix

![Priority Matrix](https://res.cloudinary.com/db0kbxvhr/image/upload/v1581716225/priority-matrix-flying-four-p3_qt2gbm.png)

## Timeframes

| Component          | Estimated Time | Actual Time |
| ------------------ | :------------: | :---------: |
| Layout             |      3hrs      |    0hrs     |
| ExpediaLogo        |      2hrs      |    0hrs     |
| Hotel Button       |      2hrs      |    0hrs     |
| Room Button        |      2hrs      |    0hrs     |
| SEARCHNAV Vacation |      3hrs      |    0hrs     |
| Hotel              |      4hrs      |    0hrs     |
| Hotel List         |      4hrs      |    0hrs     |
| Search Form        |      3hrs      |    0hrs     |
| Confirmation       |      2hrs      |    0hrs     |
| App                |      3hrs      |    0hrs     |
| Admin (Edit)       |      3hrs      |    0hrs     |
| Admin (Create)     |      3hrs      |    0hrs     |
| Admin Form         |      3hrs      |    0hrs     |
| Total | 37hrs | 0hrs |

## Additional Libraries

**Front-End**

- [React](https://reactjs.org/) to build our front-end
- [React Router Dom](https://www.npmjs.com/package/react-router-dom) to create our routes on the front-end
- [Axios](https://github.com/axios/axios) to get data from our api on our backend server and render data on the front-end

**Back-End**

- [Postgres](https://www.postgresql.org/) to create our database
- [Express](https://expressjs.com/) to build our server
- [Morgan](https://github.com/expressjs/morgan) to make logs more readable
- [Body Parser](https://github.com/expressjs/body-parser) to parse html into json for CRUD functionality
- [Nodemon](https://www.npmjs.com/package/nodemon) as a dev-dependency to continuously run our development server
- [Sequelize-CLI](https://sequelize-guides.netlify.com/) to help us create our database

## Expected Issues

- Coding certain components may be more complex than anticipated - teamwork! Divide and conquer!
- Expedia is a large and fairly complex site - adjust MVP, discuss leaving off extra functionality with UX
- One of us may get caught up in a less important function or stuck on a complex one - regular check-ins throughout the day

## Issues and Resolutions

Use this section to list of all major issues encountered and their resolutions

#### ISSUES AND RESOLUTIONS EXAMPLE:

**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier  
**RESOLUTION**: Missing comma after first object in sources {} object

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log

Update as necessary with any changes or directional adjustments made throughout the project week
