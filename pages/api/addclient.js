const {dbConnect} = require('../../libs/db');
const ObjectId = require('mongodb').ObjectId;

export default async function handler (req,res){
    switch(req.method){
        case 'GET': {
            return getClient(req,res)
        }
        case 'POST': {
            return postClient(req,res)
        }
        case 'PUT': {
            return updateClient(req,res)
        }
        case 'DELETE': {
            return deleteClient(req,res)
        }
    }
}