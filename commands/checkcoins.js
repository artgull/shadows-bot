const Discord = require("discord.js")
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let user = message.author.id;
    let pUser = message.guild.member(message.mentions.users.first())|| message.guild.members.get(args[1])
    if(!coins[user]){
        coins[user] = {
            level: 1,
            xp: 0,
            coins: 0
        };
    }

    let cash = coins[pUser.id].coins

    let coinEmbed = new Discord.RichEmbed()
    .setTitle(`${pUser}`)
    .setColor("#4169e1")
    .addField(`${pUser.username} имеет `, `${cash} 👻`);

    message.channel.send(coinEmbed);

}
module.exports.help = {
    name: "пбаланс"
}