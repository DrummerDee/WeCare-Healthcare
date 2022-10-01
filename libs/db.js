import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI
const connection = {}


if (!MONGO_URI) { throw new Error('Please enter a valid mongo database string')}

async function dbConnect() {
   if(connection.isConnected){
   return
}
const db = await mongoose.connect(MONGO_URI)

connection.isConnected = db.connections[0].readyState;
}
// if(mongoose.connections.length > 0){
//     connection.isConnected = mongoose.connections[0].readyState
//         if(connection.isConnected === 1){
//             console.log('Use previous connection')
//             return
//         }
//         await mongoose.disconnect()
// }

// console.log('New connection')
// connection.isConnected = db.connections[0].readyState
// }

// const db = {dbconnect}

export default dbConnect