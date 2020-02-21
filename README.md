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

- `GET /cities`  
  returns a list of city names

- `GET /cities/:city/hotels`  
  returns a list of hotels in the specified city

- `GET /hotels/:hotel`  
  returns details about the specified hotel

- `GET /hotels/:hotel/rooms`  
  returns a list of rooms in the specified hotel

- `GET /hotels/:hotel/rooms/:room`  
  returns details about the specified hotel room

- `POST /hotels`  
  add a new hotel

- `POST /hotels/:hotel/rooms`  
  add a new room to an existing hotel (post-MVP)

- `PUT /hotels/:hotel`  
  update hotel info

- `PUT /hotels/:hotel/rooms/:room`  
  update hotel room info (post-MVP)

- `DELETE /hotels/:hotel`  
  remove a hotel from the DB

## Sample JSON from `GET /hotels/:hotel`

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

| Component         | Estimated Time | Actual Time |
| ----------------- | :------------: | :---------: |
| Layout            |      3hrs      |   2.5hrs    |
| ExpediaLogo       |      2hrs      |   2.5hrs    |
| Hotel Button      |      2hrs      |    7hrs     |
| Room Button       |      2hrs      |    5hrs     |
| Hotel             |      4hrs      |    2hrs     |
| Hotel List        |      4hrs      |   5.5hrs    |
| Search Form       |      3hrs      |    5hrs     |
| Confirmation      |      2hrs      |   2x6hrs    |
| App               |      3hrs      |    2hrs     |
| Admin (Edit)      |      3hrs      |   2x4hrs    |
| Admin (Create)    |      3hrs      |   2x4hrs    |
| Admin Form        |      3hrs      |    4hrs     |
| Backend Setup     |      5hrs      |   4x3hrs    |
| Backend debugging |      n/a       |    4hrs     |
| React Router      |      n/a       |    3hrs     |
| Styling           |      n/a       |   4x5hrs    |
| Total             |     37hrs      |  102.5hrs   |

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

### `PUT` and `DELETE` commands don't work

**ISSUE**: PUT and DELETE routes return:
`update or delete on table "Hotels" violates foreign key constraint "Rooms_hotel_id_fkey" on table "Rooms"`

- related to `CASCADE`?
  tried commenting out `onDelete: "CASCADE"` for child tables.
  no change
- googled "table violates foreign key constraint" and found this on StackOverflow:
  > You're trying to delete a record that its primary key is functioning as a foreign key in another table, thus you can't delete it.
  >
  > In order to delete that record, first, delete the record with the foreign key, and then delete the original that you wanted to delete.
- teammates suggested hard-coding a delete-all-children helper into the controllers; may consider this later, but it seems like a roundabout approach when we already have the `CASCADE` in the models
- googled "onDelete not working"
  tried adding `hooks:true` to `hasMany`/`belongsTo` based on another stackoverflow post
  still no result.
- continued poking around stackoverflow, tried [a solution by Huy Nguyen](https://stackoverflow.com/questions/23128816/sequelize-js-ondelete-cascade-is-not-deleting-records-sequelize#comment61882219_23395771); still no result
- attempted `queryInterface.removeConstraint("Hotels", "Rooms_hotel_id_fkey")` from https://stackoverflow.com/questions/29518786/remove-constraints-in-sequelize-migration
  no result

**RESOLUTION**: after many attempts, working after renaming files and variables to adjust singular/plural

---

### search form `handleChange` losing focus

**ISSUE**: `handleChange` method on text inputs is "working" but losing focus every time a key is hit.

Suspect that it has something to do with the component re-rendering after every input type but not sure.

- Tried to change how `setState` was called and it didn't work
- Tried to add a "`preventDefault`" and it didn't work.

**Research Links**:

- React Forms Documentation: https://reactjs.org/docs/forms.html
- Provides a good description of what is happening but not the solution:
  https://reactkungfu.com/2015/09/react-js-loses-input-focus-on-typing/
- This says that you can prevent it by NOT defining a component within a render, but I don't think we are doing that: https://labs.chiedo.com/post/always-define-components-outside-react-render-method/

**RESOLUTION**: Changed the way Route was defined for Home component so that other props were not also passed down, so the page stopped re-rendering, allowing us to update state.

---

### redirect to HotelList on form submit

**ISSUE**: Originally was going to use "props.history.push" to move from Home component to HotelList component. However, could not do that because no props were being sent to Home from App.

**Research Links**
https://reacttraining.com/react-router/native/api/Redirect/to-object
https://blog.bitsrc.io/must-know-concepts-of-react-router-fb9c8cc3c12

**RESOLUTION**: Therefore, had to move state from App to Home and leverage the "Redirect" method in react-router-dom in order to achieve the same result.

Had lots of issues getting this to work because originally I had the conditional in the handleSubmit method instead of the render method by mistake.

---

## Code Snippet

```
  renderIcon(key, img) {
    return (
      key === true ? <img src=
        {require(`../../images/icons-assets/${img}`)} alt={`${img}`} className="icon" /> : ""
    )
  }
```

`renderIcon` is used in our `Hotel` component to render a variety of icons that represent features/amenities a hotel may have, such as a business center, free wifi, or laundry service. Each amenity is given a `true`/`false` value in our database, which is then called by axios and stored in state. The `renderIcon` function takes two arguments: `key` represents a state associated with a particular amenity (e.g., `this.state.wifi`) and `img` represents the filename of amenity's icon. If the value of `key` is `true`, an `img` tag referring to the proper icon will be placed in the code; otherwise, nothing will happen.

## Change Log

**20. Feb**

- Instead of `App.js` holding state for the search form, moved state to `Home.jsx` to be able to pass state to Hotel List component via the `"/hotels"` route.

**19. Feb**

- Decided not to use a `Layout` component since the only thing it would hold is the `LogoNav` component

**18. Feb**

- changed root directory from `"/api"` to `"/"` per Steve's suggestion

**15. Feb**

- Express had couldn't intepret our `varchar` values, so we changed them to `string` instead.
