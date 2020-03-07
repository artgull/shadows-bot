const Discord = module.require("discord.js");
const lvl = require("../coins.json");
const fs = require('fs')

module.exports.run = async (bot,message,args) => {
    let avtor = message.author.id;
    let nextlv = lvl[avtor].level * 500;
    message.delete(1)
    const embed = new Discord.RichEmbed()
    .setTitle("**Статистика**")
    .setColor("#4169e1")
    .setThumbnail(message.author.avatarURL)
    .addField("**Никнейм**", `${message.author.username}#${message.author.discriminator}`)
    .addField("**Уровень**", lvl[avtor].level)
    .addField("**Опыт**", `${lvl[avtor].xp}/${nextlv}`)
    .addField("**Баланс**", `${lvl[avtor].coins} душ(а)`)
    message.channel.send(embed);

}
module.exports.help = {
    name: "ранк"
}