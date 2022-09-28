import mongoose, { connection } from "mongoose";

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) { throw new Error('Please enter a valid mongo database string')}

let cached = global.mongoose

if(!cached) {cached = global.mongoose = {conn: null, promise : null}}
const connection = {}
async function dbConnect() {
   if(connection.isConnected){
   console.log('Already connected to database')
   return
}
if(mongoose.connections.length > 0){
    connection.isConnected = mongoose.connections[0].readyState
        if(connection.isConnected === 1){
            console.log('Use previous connection')
            return
        }
        await mongoose.disconnect()
}
const db = await mongoose.connect(MONGO_URI)
console.log('New connection')
connection.isConnected = db.connections[0].readyState
}
const db = {connect}
export default dbConnect