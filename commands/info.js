const Discord = module.require("discord.js");
const lvl = require("../coins.json");
const fs = require('fs')

module.exports.run = async (bot,message,args) => {
  let klan = message.guild.members.get(message.author.id).nickname
    let avtor = message.author.id;
    if(!lvl[avtor]) {
        lvl[avtor] = {
          level: 1,
          xp: 0,
          coins: 0
        };
      }

    
    let nextlv = lvl[avtor].level * 500;
    message.delete(1)
    const embed = new Discord.RichEmbed()
    .setTitle("**Статистика**")
    .setColor("#4169e1")
    .setThumbnail(message.author.avatarURL)
    .addField("**Никнейм**", klan)
    .addField("**Уровень**", `${lvl[avtor].level}`)
    .addField("**Опыт**", `${lvl[avtor].xp}/${nextlv}`)
    .addField("**Баланс**", `${lvl[avtor].coins} 👻`)
    message.channel.send(embed);

}
module.exports.help = {
    name: "инфо"
}