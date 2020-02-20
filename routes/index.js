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
// ALL HOTELS
router.get("/hotels", controllers.getAllHotels)
// HOTEL DETAILS
router.get("/hotels/:hotelId", controllers.getHotelDetails);
// ROOMS IN A HOTEL
router.get("/hotels/:hotelId/rooms", controllers.getAllRoomsByHotel);
// ROOM DETAILS
router.get("/hotels/:hotelId/rooms/:room_id", controllers.getRoomDetails);

/* ---------- POST ---------- */
// NEW HOTEL
router.post("/hotels", controllers.createHotel);

/* ---------- PUT ---------- */
// UPDATE HOTEL
router.put("/hotels/:hotelId", controllers.updateHotel);

/* ---------- DELETE ---------- */
// DELETE HOTEL
router.delete("/hotels/:hotelId", controllers.deleteHotel);

module.exports = router;
