const mongoose = require('mongoose');

//
const dataDemo = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    years: {
        type: Number,
    }
});

const dataSeCong = new mongoose.model('demo', dataDemo);
module.exports = dataSeCong;