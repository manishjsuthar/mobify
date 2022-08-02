const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const { body, validationResult } = require('express-validator');

mongoose.connect('mongodb://127.0.0.1:27017/mobify', {useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log('mongodb connection established')
});

const ContactForm = require('./models/ContactForm')
const PhoneData = require('./models/PhoneData')

const app = express()
app.use(express.json());
app.use(cors());
const port = 3100


//contactform
app.get('/api/contactform/',async (req, res) =>{
    try {
        const contactformdetails = await ContactForm.find();
        res.json(contactformdetails)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

app.post('/api/contactform/new',
body('cemail').isEmail(),
 async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
	const contactitem = new ContactForm({
		cname: req.body.cname,
        cemail: req.body.cemail,
        cmessage: req.body.cmessage
	})
	const contactsitem = await contactitem.save();
	res.json(contactsitem);
});


//phone data
app.get("/api/phonedata/", async (req, res)=> {
try {
    const getphonedata = await PhoneData.find();
    res.json(getphonedata);
} catch (error) {
    console.log(error);
}
})

app.post("/api/phonedata/new",async (req, res) => {
    try {
        const addphonedata = new PhoneData({
            phonename:req.body.phonename,
            phoneprice: req.body.phoneprice,
            condition: req.body.condition
        })
        const addphonesdata = await addphonedata.save();
        res.json(addphonesdata);
    } catch (error) {
        console.log(error);
    }
})

app.delete("/api/deletephonedata/:id", async (req, res) => {
    try {
        const deletephonedata =await PhoneData.findByIdAndDelete(req.params.id)
        res.json({"success":"The phone data has been successfully deleted",deletedphonedata:deletephonedata })
    } catch (error) {
      console.log(error);  
    }
})

app.put("/api/updatephonedata/:id", async (req, res) => {
    const {phonename, phoneprice, condition} = req.body;
    try {
        //create a newphone data object
        const newPhone = {};
        if(phonename) {
            newPhone.phonename = phonename
        }
        if(phoneprice) {
            newPhone.phoneprice = phoneprice
        }
        if(condition) {
            newPhone.condition = condition
        }
        //find the phonedata to be updated and update it 
        let updatephonedata = await PhoneData.findById(req.params.id)
        if(!updatephonedata) {res.status(401).send("Note Found")}

        updatephonedata = await PhoneData.findByIdAndUpdate(req.params.id, { $set: newPhone }, { new: true })
        res.json({ updatephonedata });

    } catch (error) {
        console.log(error)
    }
})

app.listen(port, () => {
    console.log(`app listening at Port:${port}`)
  })