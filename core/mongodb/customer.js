const Customer = require('../../models/customer');

exports.list = () => {
    return Customer.find();
};

exports.get = (customerId) => {
    return Customer.findById(customerId);
};

exports.save = (req) => {
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const email = req.body.email;
    const product = req.body.product;

    if (id) {
        return Customer.updateOne({ _id: id }, {
            $set: {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                product: product
            }
        })
    }
    else {
        const customer = new Customer(
            {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                product: product
            }
        );
        return customer.save()
    }
};

exports.delete = (customerId) => {
    return Customer.remove({ _id: customerId });
};