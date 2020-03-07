const Discord = require("discord.js")
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let user = message.author.id;
    if(!coins[user]){
        coins[user] = {
            coins: 0
        };
    }

    let uCoins = coins[user].coins;

    let coinEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.username)
    .setColor("#4169e1")
    .addField("👻", `${uCoins} душ(а).`);

    message.channel.send(coinEmbed);

}

module.exports.help = {
    name: "баланс"
}