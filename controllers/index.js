const { Cities, Hotels, Rooms } = require('../models')

// GET request for cities. Refer to "City" model. Should I join the Hotels model? Route: GET /api/cities
const getAllCities = async (req, res) => {
    try {
        const cities = await Cities.findAll()
        return res.status(200).json({ cities })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// GET request for hotels by city id. Will refer to "Hotels" model, "city_id" foreign key to match. Need to check models to ensure consistency.
// Route: GET /api/cities/:city_id/hotels

const getAllHotelsByCity = async (req, res) => {
    try {
        const { city_id } = req.params
        const hotels = await Hotels.findAll({
            where: {
                city_id: city_id
            }
        })
        if (hotels) {
            return res.status(200).json({hotels: hotels})
        }
        return res.status(404).send('There are no hotels with that city ID.')        
    } catch (error) {
        return res.status(500).send(error.message)   
    }
}

// GET request for a single hotel by hotel id. Will refer to the Hotels model
// Route: GET /api/hotels/:hotel_id

const getHotelDetails = async (req, res) => {
    try {
        const {hotel_id} = req.params
        const hotel = await Hotels.findOne({
            where: {
                id: hotel_id
            }, 
            include: [
                { model: Rooms }
            ]
        })
        if (hotel) {
            return res.status(200).json({hotel: hotel})
        }
        return res.status(404).send('There is no hotel with that ID.')
    } catch (error) {
        return res.status(500).send(error.message)  
    }
}

// GET request for all rooms within a hotel. Refer to the "Rooms" model and match on "hotel_id" foreign key.
// Route: GET /api/hotels/:hotel_id/rooms

const getAllRoomsByHotel = async (req, res) => {
    try {
        const {hotel_id} = req.params
        const rooms = await Rooms.findAll({
            where: {
                hotel_id: hotel_id
            }
        })
        if (rooms) {
            return res.status(200).json({rooms})
        }
        return res.status(404).send('There are no rooms in this hotel.')

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

// GET request for a single room within a hotel by room id. Will reference the Room model.
// Route: GET /api/hotels/:hotel_id/rooms/:room_id

const getRoomDetails = async (req, res) => {
    try {
        const {room_id} = req.params
        const room = await Rooms.findByPk(room_id)
        if (room) {
            return res.status(200).json({room: room})
        }
        return res.status(404).send(`The room with id ${room_id} does not exist.`)
    } catch (error) {
        return res.json(500).send(error.message)
    }
}

// POST request for adding a new hotel
// Route: POST /api/hotels

const createHotel = async (req, res) => {
    try {
      const hotel = await Hotels.create(req.body);
      return res.status(201).json({ hotel })  
    } catch (error) {
        console.log(error)
        return res.status(500).send(error.message)
    }
}

// PUT request for updating an existing hotel
// Route: PUT /api/hotels/:hotel_id

const updateHotel = async (req, res) => {
    try {
      const { hotel_id } = req.params
      const updated = await Hotels.update(req.body, {
          where: { id: hotel_id }
      })
      if (updated) {
          const updatedHotel = await Hotels.findOne({where: {id: hotel_id}})
          return res.status(200).json({ hotel: updatedHotel })
      }
      throw new Error(`Hotel with id ${hotel_id} was not found.`)
    } catch (error) {
        return res.status(500).send(error.message)   
    }
}

// DELETE request for deleting a hotel
// Route: DELETE /api/hotels/:hotel_id

const deleteHotel = async (req, res) => {
    try {
        const { hotel_id } = req.params
        const deleted = await Hotels.destroy({
            where: { id: hotel_id}
        })
        if (deleted) {
            return res.status(204).send(`Hotel with id ${hotel_id} was deleted.`)
        }
        throw new Error(`Hotel with id ${hotel_id} was not found.`)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

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
}