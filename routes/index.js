const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

/* ---------- GET ---------- */
// ROOT
router.get("/", (req, res) => res.send("This is root!"));
// CITY NAMES
router.get("/cities", controllers.getAllCities);
// HOTELS IN A CITY
router.get("/cities/:cityId/hotels", controllers.getAllHotelsByCity);
// HOTEL DETAILS
router.get("/hotels/:hotelId", controllers.getHotelDetails);
// ROOMS IN A HOTEL
router.get("/hotels/:hotelId/rooms", controllers.getAllRoomsByHotel);
// ROOM DETAILS
router.get("/hotels/:hotelId/rooms/:room_id", controllers.getRoomDetails);
// // ALL ROOMS
// router.get("/rooms", controllers.getAllRooms);

/* ---------- POST ---------- */
// NEW HOTEL
router.post("/hotels", controllers.createHotel);

/* ---------- PUT ---------- */
// UPDATE HOTEL
router.put("/hotels/:hotelId/rooms", controllers.updateHotel);

/* ---------- DELETE ---------- */
// DELETE HOTEL
router.delete("/hotels/:hotelId", controllers.deleteHotel);

module.exports = router;
