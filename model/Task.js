const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    taskId: {
        type: String,
    },
    nameTake: {
        type: Schema.Types.ObjectId,
        ref: 'Staff'
    },
    routeCode: {
        type: String,
    },
    dateStart: {
        type: String,
        maxLength: 255
    },
    status: {
        type: String,
    },
    shift: {
        type: String,
    },
    mcps: {
        type: String,
    },
    vehicle:{
        type: String,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', TaskSchema);