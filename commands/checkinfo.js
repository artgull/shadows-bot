const Discord = module.require("discord.js");
const lvl = require("../coins.json");
const fs = require('fs')

module.exports.run = async (bot,message,args) => {
    let pUser = message.guild.member(message.mentions.users.first())|| message.guild.members.get(args[1])
    let userav = message.mentions.users.first().avatarURL
    if(!lvl[pUser.id]) {
        lvl[pUser.id] = {
          level: 1,
          xp: 0,
          coins: 0
        };
      }

    
    let nextlv = lvl[pUser.id].level * 500;
    message.delete(1)
    if(args[1] === undefined) return message.reply("Не указано имя")
    const embed = new Discord.RichEmbed()
    .setTitle("**Статистика**")
    .setColor("#4169e1")
    .setThumbnail(userav)
    .addField("**Никнейм**", pUser.displayName)
    .addField("**Уровень**", `${lvl[pUser.id].level}`)
    .addField("**Опыт**", `${lvl[pUser.id].xp}/${nextlv}`)
    .addField("**Баланс**", `${lvl[pUser.id].coins} 👻`)
    message.channel.send(embed);

}
module.exports.help = {
    name: "пинфо"
}