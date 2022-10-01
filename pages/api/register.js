 import dbConnect from '../../libs/db'
 import User from '../../Models/User'
 


 dbConnect()

export default async function handler(req,res){
  try{
    const user = await User.create(req.body)
    res.redirect('/homepage')
    if(!user){
      return res.json({message:'User does not exist'})
    }
  }catch(error){
    res.status(400).json({message:'Not able to create user' })
  }
}

