const Discord = module.require("discord.js");
const fs = require('fs')
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot,message,args) => {
  message.delete();
  let pUser = message.guild.member(message.mentions.users.first())|| message.guild.members.cache.get(args[1])
  let klan = message.guild.members.cache.get(message.author.id).displayName
  
  
  let avtor = message.author.id;
    
      
  
  if(args[1] !== undefined) {
  Stat.findOne({
    userID: pUser.id
  }, (err, stat) => {
    if(err) console.log(err);
    if(!stat) {
        const newStat = new Stat({
            userID: pUser.id,
            userguildName: message.guild.members.cache.get(pUser.id).displayName,
            guildid: message.guild.id,
            userName: pUser.tag,
            level: 1,
            xp: 0,
            money: 0,
            msgs: 0,
            voicetime: 0,
            voicehours: 0,
            voiceall: 0

        })
        if(err) console.log(err);
        newStat.save().catch(err => console.log(err));  
      } else {
        let nextlv = stat.level * 1000;    
        let userav = message.mentions.users.first().avatarURL()
  const embed = new Discord.MessageEmbed()
  .setTitle("**Статистика**")
  .setColor("#4169e1")
  .setThumbnail(userav)
  .addField("**Никнейм**", pUser.displayName)
  .addField("**Уровень**", `${stat.level}`)
  .addField("**Опыт**", `${stat.xp}/${nextlv}`)
  .addField("**Баланс**", `${stat.money} 👻`)
  .addField("**Сообщения**", `${stat.msgs}`, true)
  .addField("**Время в голосе**", `${stat.voicehours}ч ${stat.voicetime}мин`, true)
  .setFooter(`От ${message.guild.members.cache.get(message.author.id).displayName}`)
  message.channel.send(embed);
  try {
    fs.appendFileSync("./log.txt", `\n[${message.createdAt}] ${message.author.id}(${message.guild.members.cache.get(message.author.id).nickname}) проверил статистику ${pUser.id}(${pUser.displayName})`, 'utf-8')
}
catch(err) {
    console.log(err)
}
}
    })
  } else {
    Stat.findOne({
      userID: avtor
  }, (err, stat) => {
      if(err) console.log(err);
      if(!stat) {
          const newStat = new Stat({
              userID: avtor,
              userguildName: message.guild.members.cache.get(avtor).displayName,
              guildid: message.guild.id,
              userName: message.author.tag,
              level: 1,
              xp: 0,
              money: 0,
              msgs: 0,
              voicetime: 0,
              voicehours: 0,
              voiceall: 0

          })
          if(err) console.log(err);
          newStat.save().catch(err => console.log(err));
        }
         else {
          let nextlv = stat.level * 1000;
    const embed = new Discord.MessageEmbed()
    .setTitle("**Статистика**")
    .setColor("#4169e1")
    .setThumbnail(message.author.avatarURL())
    .addField("**Никнейм**", klan)
    .addField("**Уровень**", `${stat.level}`)
    .addField("**Опыт**", `${stat.xp}/${nextlv}`)
    .addField("**Баланс**", `${stat.money} 👻`,true)
    .addField("**Сообщения**", `${stat.msgs}`, true)
    .addField("**Время в голосе**", `${stat.voicehours}ч ${stat.voicetime}мин`, true)
    message.channel.send(embed);
         }
        
    })
}
}
module.exports.help = {
    name: "инфо"
}