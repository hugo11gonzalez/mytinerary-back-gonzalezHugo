const {Schema, model, Types} = require('mongoose')

const schemaClient = new Schema({
    name: {
        type : String ,
        required:[true,'Name is Required']
    },
    lastName: {
        type :String,
        required:[true,'LastName is Required']
    },
    age: {
        type : Number,
        default:'0',
        required:[true,'Age is Required']
    },
    accounts:[{
        type:Types.ObjectId,
        ref:"Account"
    }]
})

const Client = model("Client", schemaClient)

module.exports = Client 