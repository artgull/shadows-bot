const mongoose = require("mongoose");
const shopSchema = mongoose.Schema({
    sellerID: String,
    sellerName: String,
    guildid: String,
    item: String,
    price: Number
})
module.exports = mongoose.model("Shop", shopSchema);