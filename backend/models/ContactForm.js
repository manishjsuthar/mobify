const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
	cname: {
        type:String,
        required:true,
    },
	cemail: {
        type:String,
        required:true,
    },
	cmessage: {
        type:String,
        required:true,
    },
	timestamp: {
		type: String,
		default: Date.now()
	}
});

const ContactForm = mongoose.model("ContactForm", ContactSchema);

module.exports = ContactForm;