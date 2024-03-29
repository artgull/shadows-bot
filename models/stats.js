const mongoose = require("mongoose");
const statSchema = mongoose.Schema({
    userID: String,
    userName: String,
    userguildName: String,
    guildid: String,
    level: Number,
    xp: Number,
    money: Number,
    msgs: Number,
    voicetime: Number,
    voicehours: Number,
    voiceall: Number,
    msgcounter: Number
}, {
    versionKey: false
})
module.exports = mongoose.model("Data", statSchema);