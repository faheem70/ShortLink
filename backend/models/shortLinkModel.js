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
    expiresAt: { type: Date, default: () => Date.now() + 48 * 60 * 60 * 1000 },
    visitHistory: [{ timestamp: { type: Number } }],
},

    {
        timestamps: true
    }


);

const ShortLink = mongoose.model('ShortLink', shortLinkSchema);

module.exports = ShortLink;