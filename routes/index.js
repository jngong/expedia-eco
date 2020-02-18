const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

/* ---------- GET ---------- */
// ROOT
router.get("/", (req, res) => res.send("This is root!"));
// CITY NAMES
router.get("/cities", controllers.getAllCities);
// HOTELS IN A CITY
router.get("/cities/:city_id/hotels", controllers.getAllHotelsByCity);
// HOTEL DETAILS
router.get("/hotels/:hotel_id", controllers.getHotelDetails);
// ROOMS IN A HOTEL
router.get("/hotels/:hotel_id/rooms", controllers.getAllRoomsByHotel);
// ROOM DETAILS
router.get("/hotels/:hotel_id/rooms/:room_id", controllers.getRoomDetails);

/* ---------- POST ---------- */
// NEW HOTEL
router.post("/hotels", controllers.createHotel);

/* ---------- PUT ---------- */
// UPDATE HOTEL
router.put("/hotels/:hotel_id", controllers.updateHotel);

/* ---------- DELETE ---------- */
// DELETE HOTEL
router.delete("/hotels/:hotel_id", controllers.deleteHotel);

module.exports = router;
