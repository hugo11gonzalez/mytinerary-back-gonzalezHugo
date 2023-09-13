const {Schema, model, Types} = require('mongoose')

const schemaCity = new Schema({
    name: {
        type : String ,
        required:[true,'Name is Required']
    },
    foto: {
        type :String,
        required:[true,'Foto is Required']
    },
    pais: {
        type : String,
        required:[true,'Pais is Required']
    },
    itinerary:[{
        type:Types.ObjectId,
        ref:"Itinerary"
    }]
})
//                Se llama, utiliza
const City = model("City", schemaCity)

module.exports = City 