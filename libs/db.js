import {connect,connection} from 'mongoose'

const MONG0_URI = process.env.MONG0_URI
const conn = {
    isConnected : false
}

export async function dbConnect(){
    if(conn.isConnected) 
    return; 

    const db = await connect(MONG0_URI)

    conn.isConnected = db.connections[0].readyState
}

connection.on('connected', () => {
    console.log('Connected to Mongo database')
});
connection.on('error', (err) => {
    console.log('Mongo database error', err.message)
});
