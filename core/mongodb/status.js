const Status = require('../../models/status');

exports.list = () => {
    return Status.find();
};

exports.get = (statusId) => {
    return Status.findById(statusId);
};

exports.save = (req) => {
    const id = req.body.id;
    const name = req.body.name;

    if (id) {
        return Status.updateOne({ _id: id }, {
            $set: {name: name }
        })
    }
    else {
        const status = new Status(
            {
                name: name
            }
        );
        return status.save()
    }
};

exports.delete = (statusId) => {
    return Status.remove({ _id: statusId });
};