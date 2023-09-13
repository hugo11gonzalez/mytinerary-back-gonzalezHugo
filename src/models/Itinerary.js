const {Schema, model, Types} = require('mongoose')

const schemaItinerary = new Schema ({
    foto:{
        type:String,
        required:[true,'La Foto es obligatoria'],
    },
    nombre:{
        type:String,
        required:[true,'El nombre es obligatorio'],
    },
    price:{
        type:Number,
        required:[true,'El precio es obligatorio'],
    },
    duration:{
        type:Number,
        default: 1,
        required:[true,'La cantidad de horas es obligatoria'],
    },
    like:{
        type:Number,
        default: 0,
        required:[true,'Los Likes son obligatorios'],
    },
    hashtags:{
        type:String,
        required:[true,'Los hashtags son obligatorios'],
    },
    _city:{
        type:Types.ObjectId,
        ref: "City"
    }
})

const Itinerary = model("Itinerary", schemaItinerary)

module.exports = Itinerary