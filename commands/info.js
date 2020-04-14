const Discord = module.require("discord.js");
const fs = require('fs')
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot,message,args) => {
  message.delete(1);
  let klan = message.guild.members.get(message.author.id).nickname
    let avtor = message.author.id;
    Stat.findOne({
      userID: avtor
  }, (err, stat) => {
      if(err) console.log(err);
      if(!stat) {
          const newStat = new Stat({
              userID: avtor,
              userguildName: message.guild.members.get(avtor).nickname,
              guildid: message.guild.id,
              userName: message.author.tag,
              level: 1,
              xp: 0,
              money: 0

          })
          if(err) console.log(err);
          newStat.save().catch(err => console.log(err));
      } else {

    
    let nextlv = stat.level * 500;
    const embed = new Discord.RichEmbed()
    .setTitle("**Статистика**")
    .setColor("#4169e1")
    .setThumbnail(message.author.avatarURL)
    .addField("**Никнейм**", klan)
    .addField("**Уровень**", `${stat.level}`)
    .addField("**Опыт**", `${stat.xp}/${nextlv}`)
    .addField("**Баланс**", `${stat.money} 👻`)
    message.channel.send(embed);
      }
    })
}
module.exports.help = {
    name: "инфо"
}