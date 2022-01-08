const deparment = require('../core/mongodb/department');
const result = require('../core/results/result');
exports.list = (req, res, next) => {
    deparment.list()
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.get = (req, res, next) => {
    deparment.get(req.params.departmentId)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.save = (req, res, next) => {
    deparment.save(req)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.delete = (req, res, next) => {
    deparment.delete(req.body.id)
        .then(response => {
            res.json(result.Result(true, null, response));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};