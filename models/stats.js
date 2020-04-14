const mongoose = require("mongoose");
const statSchema = mongoose.Schema({
    userID: String,
    userName: String,
    userguildName: String,
    guildid: String,
    level: Number,
    xp: Number,
    money: Number
})
module.exports = mongoose.model("Data", statSchema);