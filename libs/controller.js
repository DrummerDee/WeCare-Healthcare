import Clients from '../model/client'

/*Controller */
export async function getClients(req,res){
    try{
        const clients = await Clients.find({})

        if(!clients) return res.status(404).json({error:'Data was not found'})
        res.status(200).json(clients)
    }catch(error){
        res.status(404).json({message:'Error while fetching get data'})
    }
}