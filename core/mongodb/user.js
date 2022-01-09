const User = require('../../models/user');

exports.list = () => {
    User.find();
};

exports.get = (userId) => {
    User.findById(userId);
};

exports.save = (req) => {
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const phone = req.body.phone;
    const email = req.body.email;
    const department = req.body.department;
    const birthDate = req.body.birthDate;
    const state = req.body.state;

    if (id) {
        User.updateOne({ _id: id }, {
            $set: {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                department: department,
                birthDate: birthDate,
                state: state,
                modifyDate: Date.now
            }
        })
    }
    else {
        const user = new User(
            {
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                department: department,
                birthDate: birthDate
            }
        );
        user.save()
    }
};