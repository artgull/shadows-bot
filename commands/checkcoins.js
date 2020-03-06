const Discord = require("discord.js")
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let user = message.author.id;
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
    if(!coins[user]){
        coins[user] = {
            coins: 0
        };
    }

    let uCoins = coins[user].coins;

    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#000fff")
    .addField("🤡", `${uCoins} кукурузок`);

    message.channel.send(coinEmbed);

}

module.exports.help = {
    name: "пбаланс"
}