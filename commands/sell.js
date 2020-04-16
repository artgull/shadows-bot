const Discord = require("discord.js")
const Shop = require("./shop.js")

module.exports.run = (bot, message, args) => {
    let mag = Shop.shopembed
    let pUser = message.guild.members.get(message.author.id).nickname;
    let myguild = '435499299137257493';
    let me = '218611183886794753';
	mag.setAuthor("Тест")
    message.delete(1)
    myguild.createchannel(sUser, 'text');
    
        
        
}
module.exports.help = {
    name: "продать"
}