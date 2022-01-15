const Product = require('../../models/product');

exports.list = () => {
    return Product.find();
};

exports.get = (productId) => {
    return Product.findById(productId);
};

exports.save = (req) => {
    const id = req.body.id;
    const name = req.body.name;
    const model = req.body.model;
    const description = req.body.description;
    const price = req.body.price;
    const department = req.body.department;
    const status = req.body.status;

    if (id) {
        return Product.updateOne({ _id: id }, {
            $set: {
                name: name,
                model: model,
                description: description,
                price: price,
                department: department,
                status: status
            }
        })
    }
    else {
        const product = new Product(
            {
                name: name,
                model: model,
                description: description,
                price: price,
                department: department,
                status: status
            }
        );
        return product.save()
    }
};

exports.delete = (productId) => {
    return Product.remove({ _id: productId });
};