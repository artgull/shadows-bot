const Discord = require("discord.js");
const fs = require('fs');
const coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    if(message.author.id === "218611183886794753") {
        message.delete(1);
        let data = fs.readFileSync('./coins.json', 'utf-8');
        //let warning = fs.readFileSync('warning.txt', 'utf-8');
        message.author.send(data);
        //message.channel.send(warning);
        


    }
    else return
    

}
module.exports.help = {
    name: "save"
}