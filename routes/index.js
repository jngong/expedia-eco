const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

/* ---------- GET ---------- */
// ROOT
router.get("/", (req, res) => res.send("This is root!"));
// CITY NAMES
router.get("/cities", controllers.getAllCities);
// HOTELS IN A CITY
router.get("/cities/:city/hotels", controllers.getAllHotelsByCity);
// HOTEL DETAILS
router.get("/hotels/:hotel", controllers.getHotelDetails);
// ROOMS IN A HOTEL
router.get("/hotels/:hotel/rooms", controllers.getAllRoomsByHotel);
// ROOM DETAILS
router.get("/hotels/:hotel/rooms/:room", controllers.getRoomDetails);

/* ---------- POST ---------- */
// NEW HOTEL
router.post("/hotels", controllers.createHotel);

/* ---------- PUT ---------- */
// UPDATE HOTEL
router.put("/hotels/:hotel/rooms", controllers.updateHotel);

/* ---------- DELETE ---------- */
// DELETE HOTEL
router.delete("/hotels/:hotel", controllers.deleteHotel);

module.exports = router;
