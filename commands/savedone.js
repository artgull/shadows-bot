const Discord = require("discord.js");
const fs = require('fs');
const coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id === "218611183886794753") {
        message.delete(1);
        let warning = fs.readFileSync('./uploadcomplete.txt', 'utf-8');
        message.channel.send(warning);
        
        

    }
    else return
    

}
module.exports.help = {
    name: "savedone"
}