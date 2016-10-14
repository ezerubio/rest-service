var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var inscriptionSchema = new Schema({ 
    firstname: { type: String },
    lastname: { type: String },
    dob: {type: String},
    email: {type: String},
    country: {type: String}
});

module.exports = mongoose.model('Inscription', inscriptionSchema);  