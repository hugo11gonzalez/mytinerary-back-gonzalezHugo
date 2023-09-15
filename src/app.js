require('dotenv').config();

const express = require("express")

const router = require("./router/router")

require("./config/db")

const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

app.use("/api", router)

const PORT=process.env.PORT

app.listen (PORT, ()=>{
    console.log("Server listening on port 3000")
})