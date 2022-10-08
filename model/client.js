import {Schema,models,model} from 'mongoose';

const clientSchema = new Schema ({
   name: String,
   date: String,
})

const Clients = models.client || model('client',clientSchema )

export default Clients