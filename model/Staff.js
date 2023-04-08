const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
    CCCD: {
        type: String,
        maxLength:255
    },
    address: {
        type: String,
        maxLength:255
    },
    dob: {
        type: String,
        maxLength:255
    },
    email: {
        type: String,
        maxLength: 255
    },
    gender: {
        type: String,
        maxLength:255
    },
    name: {
        type: String,
        maxLength:255
    },
    phoneNumber: {
        type: String,
        maxLength:255
    },
    position:{
        type: String,
        maxLength:255
    },
    staffId:{
        type: String,
        maxLength:255
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Staff', StaffSchema);