const {Schema, model, Types} = require('mongoose')

const schemaAccount = new Schema ({
    number:{
        type:String,
        required:[true,'El número de cuenta es obligatorio'],
    },
    _client:{
        type:Types.ObjectId,
        ref: "Client"
    }
})

const Account = model("Account", schemaAccount)

module.exports = Account