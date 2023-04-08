const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    taskId: {
        type: String,
        maxLength:255
    },
    nameTake: {
        type: String,
        maxLength:255
    },
    routeCode: {
        type: String,
        maxLength:255
    },
    dateStart: {
        type: String,
        maxLength: 255
    },
    status: {
        type: String,
        maxLength:255
    },
    shift: {
        type: String,
        maxLength:255
    },
    mcps: {
        type: String,
        maxLength:255
    },
    vehicle:{
        type: String,
        maxLength:255
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);