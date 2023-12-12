const mongoose = require("mongoose");

const shortLinkSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [{ timestamp: { type: Number } }],
},
    {
        timestamps: true
    });

const ShortLink = mongoose.model('ShortLink', shortLinkSchema);

module.exports = ShortLink;