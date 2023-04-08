const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CollectorSchema = new Schema({
    collectorId: {
        type: String,
        maxLength:255
    },
    name: {
        type: String,
        maxLength:255
    },
    email: {
        type: String,
        maxLength:255
    },
    birthday: Date,
    phone: {
        type: String,
        maxLength:255
    },
    sex: {
        type: String,
        maxLength:255
    },
    license: {
        type: String,
        maxLength:5
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Collector', CollectorSchema);