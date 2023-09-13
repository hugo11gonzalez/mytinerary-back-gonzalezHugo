const City = require("../models/City")

const getCities = async (req, res)=> {


    try{
        let cities = await City.find().populate('itinerary')
    res.status(200).json({
        cities
    })

    }catch (err){
        res.status(500).json({message: err.message})

    }
}

const getCity = async (req, res)=> {

    try {
        let {id} = req.params

        let cityEncontrada= await City.findOne({_id: id})
        res.status(200).json(cityEncontrada)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

const addCity = async (req, res) => {
    try {
        let payload = req.body
        let cityCreate = await City.create (payload) 
        
        res.status(201).json({
            "message": "city has been added",
            "city": cityCreate
        })
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteCity = async (req, res) => {
    try {
        let {id} = req.query
        
        await City.deleteOne ({_id: id}) 
        
        res.status(200).json({
            "message": "city has been delete",
            
        })
    } catch (error) {
        res.status(500).json({message:error})
    }
}
const updateCity = async (req, res) => {
    try {
        //                           Pasamos por parametro en la url 
        let {id, name, foto, pais} = req.query
        
        await City.findByIdAndUpdate (id,{name:name, foto:foto, pais:pais} ) 
        
        res.status(200).json({
            "message": "city has been update",
            
        })
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = {
    getCities,
    getCity,
    addCity,
    deleteCity,
    updateCity
}