const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
    _Id: {
        type: String,
        required: true,
        unique: true
    },
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
        type: String
    },
    createdAt: {
        type: Date
    },
    updatedAt: {
        type: Date
    },
})
const Auth = mongoose.model("Auth", authSchema);
module.exports = Auth