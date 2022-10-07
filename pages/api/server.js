import database, { dbConnect } from '../../libs/db';
 
export default function handler(req,res) {
    dbConnect()
    res.status(200).json({message:'we did it'})
}