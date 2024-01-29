const mongoose = require('mongoose')

const MessageSchema = mongoose.Schema({
    user_firstname: {
        type: String,
        required: true,
    },
    user_lastname: {
        type: String,
        required: true,
    },
    user_email: {
        type: String,
        required: true,
    },
    user_company: {
        type: String,
        required: true,
    },
    user_phone: {
        type: String,
        required: true,
    },
    user_message: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('Message',MessageSchema)
