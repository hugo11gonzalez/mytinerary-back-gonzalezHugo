const {connect} = require('mongoose')

const URL = "mongodb+srv://hugo11gonzalez:5DNckJgwTKGsT3r5@cluster0.wztju0a.mongodb.net/?retryWrites=true&w=majority"


    connect(URL)
    . then (()=> {
        console.log("Conectado a la base de datos")
    })
    .catch (() => {
        console.log("Error de conexion a la base de datos")
    })


