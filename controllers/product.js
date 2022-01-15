const product = require('../core/mongodb/product');
const result = require('../core/results/result');

exports.list = (req, res, next) => {
    product.list()
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.get = (req, res, next) => {
    product.get(req.params.productId)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.save = (req, res, next) => {
    product.save(req)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.delete = (req, res, next) => {
    product.delete(req.body.id)
        .then(response => {
            res.json(result.Result(true, null, response));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};