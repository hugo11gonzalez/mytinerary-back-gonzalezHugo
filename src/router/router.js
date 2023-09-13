const express = require("express")

const router = express.Router()

const {getCities, getCity, addCity, deleteCity} = require ('../controller/cityController')

const {verifyDataCity,verifyDataItinerary} = require('../middlewares/verifications');

const {addItinerary} = require("../controller/itineraryController")

router.get("/cities", getCities)

router.get("/cities/:id", getCity)

router.post("/cities", verifyDataCity, addCity)

router.delete("/cities", deleteCity)

router.post("/itinerary",verifyDataItinerary, addItinerary)



module.exports = router

/*  
    .post() enviar datos para crear
    .put() debo actualizar todos los datos
    .patch() solo actualizo el dato que nos interesa
*/