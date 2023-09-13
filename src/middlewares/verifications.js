



const verifyDataCity = (req, res,next) => {
    let {name, foto, pais} = req.body
    if (!name || !foto || !pais){
        return res.status(400). json({message:"Invalid data"})
    }
    if (name == ""){
        return res.status(400). json({message:"Invalid name"})
    }
    if (foto == ""){
        return res.status(400). json({message:"Invalid foto"})
    }
    if (pais == ""){
        return res.status(400). json({message:"Invalid pais"})
    }
    next()

}
const verifyDataItinerary = (req, res,next) => {
    let {foto, nombre, price,duration, like, hashtags} = req.body
    if (!foto || !nombre || !price || !duration || !like || !hashtags){
        return res.status(400). json({message:"Invalid data"})
    }
    if (foto == ""){
        return res.status(400). json({message:"Invalid foto"})
    }
    if (nombre == ""){
        return res.status(400). json({message:"Invalid nombre"})
    }
    if (price == 0){
        return res.status(400). json({message:"Invalid price"})
    }
    if (duration == 0){
        return res.status(400). json({message:"Invalid duration"})
    }
    if (like == 0){
        return res.status(400). json({message:"Invalid like"})
    }
    if (hashtags == ""){
        return res.status(400). json({message:"Invalid hashtags"})
    }
    next()

}
module.exports = {
    verifyDataCity,
    verifyDataItinerary
}