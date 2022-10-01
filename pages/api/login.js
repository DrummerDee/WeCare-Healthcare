import { redirect } from 'next/dist/server/api-utils';
import dbConnect from '../../libs/db'
import User from '../../Models/User'

dbConnect()

export default async function handler(req,res){
const {email,password} = req.body
const user = await User.findOne({email,password});
if(!user){
  return res.json({message: 'User not found'})
}else {
  res.redirect('/homepage')
}
}