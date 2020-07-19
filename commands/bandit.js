const Discord = require('discord.js')
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = (bot, message, args) => {
    let emojies = ['👑', '💩', '⭐', '🍓', '🍒', '🍇']
    let one; let two; let three;
    let rand = Math.random() * 6 + 1;
    
} 

module.exports.help = {
    name: "слоты"
}