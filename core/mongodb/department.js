const Department = require('../../models/department');

exports.list = () => {
    return Department.find();
};

exports.get = (departmentId) => {
    return Department.findById(departmentId);
};

exports.save = (req) => {
    const id = req.body.id;
    const name = req.body.name;

    if (id) {
        return Department.updateOne({ _id: id }, {
            $set: {name: name }
        })
    }
    else {
        const deparment = new Department(
            {
                name: name
            }
        );
        return deparment.save()
    }
};

exports.delete = (departmentId) => {
    return Department.remove({ _id: departmentId });
};