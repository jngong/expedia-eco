# Eco-Expedia

Deployed site: https://expedia-clone.herokuapp.com/ 

Development Team Members: Jennifer Gong, Disney Harley, Rhol Hohenkirk, Jeffrey Lan

We built out a new feature for Expedia, which allows users to search for a bundled Flight, Hotel and Car vacation package with the option to search for an eco-friendly hotel. The search form will include a checkbox option to include only eco-friendly options. The hotel search results list will include a tree icon that indicates it is eco-friendly.

As a team, we decided to not split responsibilities front-end vs. back-end. We divided our work into mini-sprints where we will complete back-end together as a group first, then moved onto front-end. Jenn held the role of the scrum master to keep the group on deadline and Jeff was team / git leader.

## Wireframes

Collaborated with a team of UX researchers and designers who provided these [Mockups](https://projects.invisionapp.com/share/MBVIJQ9VUYN#/screens/400362146) for us to build from.

## MVP Goals

- User will be able to click on “Bundle & Save” icon and “Flight + Hotel + Car” button to start search (only active links)
- User can search for packages with a form - departure city, destination city, departure date, return date, number of travelers, checkbox for “I want to only see eco-friendly hotels”
- Site will be mobile-first and responsive for desktop as well
- When Search is clicked, user will be able to browse through hotel options (limit to 4 results)
- When Hotel is clicked, user will be able to view room options (limit to 2 results)
- At the end, user can click a button to book and will be shown a simple confirmation screen
- Link to “List A Property” will provide admin access to create, update and delete Hotels

## React Component Hierarchy

![Component Hierarchy](https://res.cloudinary.com/db0kbxvhr/image/upload/c_scale,w_800/v1581881153/Project%203%20-%20Expedia/component-hierarchy-expedia_ssospk.png)

## ERD Diagram

![ERD](https://res.cloudinary.com/db0kbxvhr/image/upload/v1581715284/Project%203%20-%20Expedia/erd-flying-four-p3_pt4zvn.png)

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

## Libraries Used

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

## Post-MVP Goals

- Additional functionality to get other packages (i.e. “Flight + Hotel” or “Hotel Only”) with additional routes
- Add React components and routes for departure flight options, return flight options and car options
- Add Create and Update functionality for our Rooms model
- Add models to database for Flights and Cars
- Add model for Users and Trips to save booked trips
- Build out second form in the user flow to add traveler details and book a trip