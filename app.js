import 'dotenv/config'
import express from "express";
import { peliculas } from './utils/peliculas.js';
import cors from 'cors'

const app = express()

app.use(cors())

const PORT = process.env.PORT

app.get('/peliculas', (req, res, next)=>{

    res.json({
        peliculas, 
        success: true,
        error: null
    })

})
//app.post('/peliculas')
//app.put('peliculas/:pelicula')
//app.delete('peliculas/:pelicula')

app.listen(PORT, ()=> {
    console.log('Servidor escuchando el puerto', PORT);
})