const Client = require("../models/Client")

const getClients = async (req, res)=> {


    try{
        let clients = await Client.find()
    res.status(200).json({
        clients
    })

    }catch (err){
        res.status(500).json({message: err.message})

    }

   
}

const getClient = async (req, res)=> {

    try {
        let {id} = req.params
        //let clienteEncontrado= await Client.findById(id)
        let clienteEncontrado= await Client.findOne({_id: id})
        res.status(200).json(clienteEncontrado)
    } catch (error) {
        res.status(500).json({message: error})
    }
  
    
/*    const {id} = req.params

    const {data}=req.query

    console.log(data);

    if (data){
        res.json(
            {
                name: "john",
                lastName: "Johnson",
                age: "16",
                paramId: id,
                queryData: data
            }
        )
    }else {
        res.json(
            {
                name: "john",
                lastName: "Johnson",
                age: "16",
                paramId: id
            }
        )
    }*/


}

const addClient = async (req, res) => {
    try {
        let payload = req.body
    
        //let querys = req.query
    
        //console.log(querys);
    
        //console.log(payload);
    
        //let clientCreate = new Client (querys)
    
        //clientCreate.save()
        
        let clientCreate = await Client.create (payload) 
        
        res.status(201).json({
            "message": "client has been added",
            "client": clientCreate
        })
    } catch (error) {
        res.status(500).json({message:error})
    }
}

const deleteClient = async (req, res) => {
    try {
        let {id} = req.query
        
        await Client.deleteOne ({_id: id}) 
        
        res.status(200).json({
            "message": "client has been delete",
            
        })
    } catch (error) {
        res.status(500).json({message:error})
    }
}

module.exports = {
    getClients,
    getClient,
    addClient,
    deleteClient
}