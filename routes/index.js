const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

/* ---------- GET ---------- */
// ROOT
router.get("/api", (req, res) => res.send("This is root!"));

// CITY NAMES
router.get("/api/cities", controllers.getAllCities);

// HOTELS IN A CITY
router.get("/api/cities/:cityId/hotels", controllers.getAllHotelsByCity);

// ALL HOTELS
router.get("/api/hotels", controllers.getAllHotels);

// HOTEL DETAILS
router.get("/api/hotels/:hotelId", controllers.getHotelDetails);

// ROOMS IN A HOTEL
router.get("/api/hotels/:hotelId/rooms", controllers.getAllRoomsByHotel);

// ROOM DETAILS
router.get("/api/hotels/:hotelId/rooms/:room_id", controllers.getRoomDetails);

/* ---------- POST ---------- */
// NEW HOTEL
router.post("/api/hotels", controllers.createHotel);

/* ---------- PUT ---------- */
// UPDATE HOTEL
router.put("/api/hotels/:hotelId", controllers.updateHotel);

/* ---------- DELETE ---------- */
// DELETE HOTEL
router.delete("/api/hotels/:hotelId", controllers.deleteHotel);

module.exports = router;
