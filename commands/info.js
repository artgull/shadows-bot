const Discord = module.require("discord.js");
const lvl = require("../coins.json");
const fs = require('fs')

module.exports.run = async (bot,message,args) => {
    let avtor = message.author.id;
    message.delete(1)
    const embed = new Discord.RichEmbed()
    .setTitle("**Пробив по базам**")
    .setColor("#4169e1")
    .setThumbnail(message.author.avatarURL)
    .addField("**ФИО**", message.author.username)
    .addField("**УРОВЕН УВЛАЖНЕНИЯ**", lvl[avtor].level)
    .addField("**УВАЖЕНИЕ**", `${lvl[avtor].xp} очков`)
    .addField("**НАЛ**", `${lvl[avtor].coins} кукурузок`)
    .setFooter("ПОзвоните мне кто нибудь пожалуйста мне грустно и одиноко")
    message.channel.send(embed);

}
module.exports.help = {
    name: "ранк"
}