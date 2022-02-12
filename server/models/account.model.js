const mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
    housing: { type: Number },
    utilities: { type: Number },
    food: {type: Number},
    phoneBill: {type: Number},
    gas: {type: Number},
    miscellanious: {type: Number},
    income: {type: Number}
}, { timestamps: true });
module.exports = mongoose.model('Account', AccountSchema);

