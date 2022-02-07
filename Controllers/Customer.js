import Customer from '../Models/Customer.js'

export default class CustomerController {
    static async add(req, res) {
        try {
            await new Customer(req.body).save()
            res.status(201).send('Customer Added Successfully!');
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async getAll(req, res) {
        try {
            const customers = await Customer.find().lean().exec();
            res.send(customers)
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async getOne(req, res) {
        try {
            const { id } = req.params;
            const customer = await Customer.findOne({_id: id}).lean().exec();
            res.send(customer)
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async updateOne(req, res) {
        try {
            const { id } = req.params;
            await Customer.updateOne({ id }, { $set: req.body })
            res.send('Customer Updated Successfully')
        } catch (err) {
            res.status(500).send(err.message);
        }
    }

    static async deleteOne(req, res) {
        try {
            const { id } = req.params;
            await Customer.deleteOne({ id })
            res.send('Customer Deleted Successfully')
        } catch (err) {
            res.status(500).send(err.message);
        }
    }
}