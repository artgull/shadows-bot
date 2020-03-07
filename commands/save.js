const Discord = require("discord.js");
const fs = require('fs');
const coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id === "218611183886794753") {
        message.delete(1);
        fs.unlink('./coinsre.json', (err) => {
            if (err) throw err;
        });
        fs.copyFile('./coins.json', './coinsre.json', (err) => {
            if(err) console.log(err)
        });
         


    }
    else return
    

}
module.exports.help = {
    name: "save"
}