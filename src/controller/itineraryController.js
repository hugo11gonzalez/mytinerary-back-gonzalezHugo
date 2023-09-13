const Itinerary = require ("../models/Itinerary")
const City = require("../models/City")




const addItinerary = async (req, res) => {
    try {

        let {id,foto, nombre, price,duration, like, hashtags} = req.body
        //console.log(req. body)
        
        let cityFound = await City.findById(id)
        
        let newItinerary = await Itinerary.create({foto, nombre, price, duration, like, hashtags, cityFound})
        
        await cityFound.updateOne({itinerary:[...cityFound.itinerary, newItinerary]})
        
        let cityFoundUpdated = await City.findById(id).populate('itinerary')
                
        res.status(200).json({
            "message": "cities has been update successfully",
             "cities": cityFoundUpdated
        })
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}
module.exports = {
    addItinerary
}