import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        await mongoose.connect(`mongodb+srv://rjrahman:rahman09@startup.vn2jf.mongodb.net/test?retryWrites=true&w=majority`);
        console.log('DB Connected!')
    } catch (error) {
        console.log('Error: DB Connection');
    }
}