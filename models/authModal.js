const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    emailaddress: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
    otp: {
        type: String
    },
    otp_expiry: {
        type: Date,
    }
})
const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth