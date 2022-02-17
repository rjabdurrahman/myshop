import express from 'express';
import connectDB from './config/db.js';
import CustomerController from './Controllers/Customer.js';
import Home from './Controllers/Home.js';
import customerValidation from './Validations/customer.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: '*'
}))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

connectDB();
app.get('/', Home.get)
app.post('/customer', customerValidation, CustomerController.add)
app.get('/customers', CustomerController.getAll)
app.get('/customer/:id', CustomerController.getOne)
app.put('/customer/:id', CustomerController.updateOne)
app.delete('/customer/:id', CustomerController.deleteOne)

app.listen(5000, () => console.log('Listening on http://localhost:5000'))