const Discord = module.require("discord.js");
const fs = require('fs');

module.exports.run = async (bot,message,args) => {
    var helper = fs.readFileSync('./help.txt', 'utf-8');
            message.delete(1)
            message.author.send(helper);
}
module.exports.help = {
    name: "помощь"
}