const mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
    housing: { type: Number },
    utilities: { type: Number },
    food: {type: Number},
    phoneBill: {type: Number},
    
}, { timestamps: true });
module.exports = mongoose.model('Person', PersonSchema);

