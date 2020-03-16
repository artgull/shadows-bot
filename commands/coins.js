const Discord = require("discord.js")
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let user = message.author.id;
    if(!coins[user]){
        coins[user] = {
            level: 1,
            xp: 0,
            coins: 0
        };
    }

    let uCoins = coins[user].coins;

    let coinEmbed = new Discord.RichEmbed()
    .setTitle(`${message.author.username}#${message.author.discriminator}`)
    .setThumbnail(message.author.avatarURL)
    .setColor("#4169e1")
    .addField("На счету",`${uCoins} 👻`);

    message.channel.send(coinEmbed);

}

module.exports.help = {
    name: "баланс"
}