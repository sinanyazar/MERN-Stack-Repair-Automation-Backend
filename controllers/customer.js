const customer = require('../core/mongodb/customer');
const result = require('../core/results/result');

exports.list = (req, res, next) => {
    customer.list()
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.get = (req, res, next) => {
    customer.get(req.params.customerId)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.save = (req, res, next) => {
    customer.save(req)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.delete = (req, res, next) => {
    customer.delete(req.body.id)
        .then(response => {
            res.json(result.Result(true, null, response));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};