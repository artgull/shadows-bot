const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    let sUser = message.author.username;
    let myguild = '435499299137257493';
    let me = '218611183886794753';

    message.delete(1)
    myguild.createchannel(sUser, 'text');
    
        
        
}
module.exports.help = {
    name: "продать"
}