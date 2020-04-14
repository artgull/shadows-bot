const Discord = module.require("discord.js");
const fs = require('fs')
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot,message,args) => {
    message.delete(1)
    let pUser = message.guild.member(message.mentions.users.first())|| message.guild.members.get(args[1])
    let userav = message.mentions.users.first().avatarURL
    Stat.findOne({
      userID: pUser.id
  }, (err, stat) => {
      if(err) console.log(err);
      if(!stat) {
          const newStat = new Stat({
              userID: pUser.id,
              userguildName: message.guild.members.get(pUser.id).nickname,
              guildid: message.guild.id,
              userName: pUser.displayName,
              level: 1,
              xp: 0,
              money: 0

          })
          if(err) console.log(err);
          newStat.save().catch(err => console.log(err));
      } else {

    
    let nextlv = stat.level * 500;
   
    if(args[1] === undefined) return message.reply("Не указано имя")
    const embed = new Discord.RichEmbed()
    .setTitle("**Статистика**")
    .setColor("#4169e1")
    .setThumbnail(userav)
    .addField("**Никнейм**", pUser.displayName)
    .addField("**Уровень**", `${stat.level}`)
    .addField("**Опыт**", `${stat.xp}/${nextlv}`)
    .addField("**Баланс**", `${stat.money} 👻`)
    message.channel.send(embed);
      }
  })

}
module.exports.help = {
    name: "пинфо"
}