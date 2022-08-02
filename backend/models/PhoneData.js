const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
	phonename: {
        type:String,
        required:true,
    },
	phoneprice: {
        type:Number,
        required:true,
    },
	condition: {
        type:String,
        required:true,
    }
});

const PhoneData = mongoose.model("PhoneData", DataSchema);

module.exports = PhoneData;