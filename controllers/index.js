const { Cities, Hotels, Rooms } = require("../models");

// GET request for cities. Refer to "City" model. Should I join the Hotels model? Route: GET /api/cities
const getAllCities = async (req, res) => {
  try {
    const cities = await Citie.findAll();
    return res.status(200).json({ cities });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// GET request for hotels by city id. Will refer to "Hotels" model, "cityId" foreign key to match. Need to check models to ensure consistency.
// Route: GET /api/cities/:cityId/hotels

const getAllHotelsByCity = async (req, res) => {
  try {
    const { cityId } = req.params;
    const hotels = await Hotel.findAll({
      where: {
        cityId: cityId
      }
    });
    if (hotels) {
      return res.status(200).json({ hotels: hotels });
    }
    return res.status(404).send("There are no hotels with that city ID.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// GET request for a single hotel by hotel id. Will refer to the Hotels model
// Route: GET /api/hotels/:hotelId

const getHotelDetails = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const hotel = await Hotel.findOne({
      where: {
        id: hotelId
      }
      // include: [{ model: Rooms }]
    });
    if (hotel) {
      return res.status(200).json({ hotel: hotel });
    }
    return res.status(404).send("There is no hotel with that ID.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// GET request for all rooms within a hotel. Refer to the "Rooms" model and match on "hotelId" foreign key.
// Route: GET /api/hotels/:hotelId/rooms

const getAllRoomsByHotel = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const rooms = await Room.findAll({
      where: {
        hotelId: parseInt(hotelId)
      }
    });
    if (rooms) {
      return res.status(200).json({ rooms });
    }
    return res.status(404).send("There are no rooms in this hotel.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// GET request for a single room within a hotel by room id. Will reference the Room model.
// Route: GET /api/hotels/:hotelId/rooms/:room_id

const getRoomDetails = async (req, res) => {
  try {
    const { room_id } = req.params;
    const room = await Room.findByPk(room_id);
    if (room) {
      return res.status(200).json({ room: room });
    }
    return res.status(404).send(`The room with id ${room_id} does not exist.`);
  } catch (error) {
    return res.json(500).send(error.message);
  }
};

// GET ALL ROOMS
// const getAllRooms = async (req, res) => {
//   try {
//   } catch (error) {
//     return res.status(500).send(error.message);
//   }
// };

// POST request for adding a new hotel
// Route: POST /api/hotels

const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    return res.status(201).json({ hotel });
  } catch (error) {
    console.log(error);
    return res.status(500).send(error.message);
  }
};

// PUT request for updating an existing hotel
// Route: PUT /api/hotels/:hotelId

const updateHotel = async (req, res) => {
  try {
    const { hotelId } = req.params;
    const updated = await Hotel.update(req.body, {
      where: { id: hotelId }
    });
    if (updated) {
      const updatedHotel = await Hotel.findOne({ where: { id: hotelId } });
      return res.status(200).json({ hotel: updatedHotel });
    }
    throw new Error(`Hotel with id ${hotelId} was not found.`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

// DELETE request for deleting a hotel
// Route: DELETE /api/hotels/:hotelId

const deleteHotel = async (req, res) => {
  try {
    const { hotelId } = req.params;
    console.log(parseInt(hotelId));
    const deleted = await Hotel.destroy({
      where: { id: parseInt(hotelId) }
    });
    if (deleted) {
      return res.status(204).send(`Hotel with id ${hotelId} was deleted.`);
    }
    throw new Error(`Hotel with id ${hotelId} was not found.`);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

/* 
Post-MVP:
createRoomInHotel
updateRoomInHotel
 */

module.exports = {
  getAllCities,
  getAllHotelsByCity,
  getHotelDetails,
  getAllRoomsByHotel,
  getRoomDetails,
  createHotel,
  updateHotel,
  deleteHotel
};
