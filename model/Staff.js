const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    CCCD: {
        type: String,
    },
    address: {
        type: String,
    },
    dob: {
        type: String,
    },
    email: {
        type: String,
        maxLength: 255
    },
    gender: {
        type: String,
    },
    name: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    position:{
        type: String,
    },
    staffId:{
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Staff', StaffSchema);