import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const customerSchema = new Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true
    }
})

export default model('Customer', customerSchema)