require('dotenv').config();
const {connect} = require('mongoose')

const URL = process.env.URL


    connect(URL)
    . then (()=> {
        console.log("Conectado a la base de datos")
    })
    .catch (() => {
        console.log("Error de conexion a la base de datos")
    })


