const Discord = require("discord.js")
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let user = message.author.id;
    let pUser = message.guild.member(message.mentions.users.first())|| message.guild.members.get(args[1])
    if(!coins[pUser.id]){
        coins[pUser.id] = {
            level: 1,
            xp: 0,
            coins: 0
        };
    }

    let cash = coins[pUser.id].coins
    if(args[1] === undefined) return message.reply("Не указано имя")
    let coinEmbed = new Discord.RichEmbed()
    .setTitle(`${pUser.displayName}`)
    .setColor("#4169e1")
    .setDescription(`имеет ${cash} 👻`)
    .setThumbnail("https://cdn.discordapp.com/attachments/681409687039901726/686235348480950292/botava.png")
    //.addField(`${pUser} имеет `, `${cash} 👻`);

    message.channel.send(coinEmbed);

}
module.exports.help = {
    name: "пбаланс"
}