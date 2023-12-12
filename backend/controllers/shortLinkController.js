const catchAsyncErrors = require("../middleware/catchAsynErrors");
const shortid = require('shortid');
const ShortLink = require("../models/shortLinkModel");

exports.createShortLink = catchAsyncErrors(async (req, res) => {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });
    const shortID = shortid();

    await ShortLink.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
});

exports.getAnalytics = catchAsyncErrors(async (req, res) => {
    const shortId = req.params.shortId;
    const result = await ShortLink.findOne({ shortId });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory,
    });
});