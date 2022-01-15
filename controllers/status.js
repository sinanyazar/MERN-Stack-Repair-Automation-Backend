const status = require('../core/mongodb/status');
const result = require('../core/results/result');

exports.list = (req, res, next) => {
    status.list()
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.get = (req, res, next) => {
    status.get(req.params.statusId)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.save = (req, res, next) => {
    status.save(req)
        .then(response => {
            res.json(result.Result(true, response, null));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};

exports.delete = (req, res, next) => {
    status.delete(req.body.id)
        .then(response => {
            res.json(result.Result(true, null, response));
        })
        .catch(err => {
            res.json(result.Result(false, null, err));
        });
};