const Discord = require("discord.js");
const fs = require('fs');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot, message, args) => {
  message.delete(1);
  if (message.member.roles.has('435764899369713664'|| '648464327636156416')){
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
  
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
            money: 0,
            msgs: 0

        })
        if(err) console.log(err);
        newStat.save().catch(err => console.log(err));
    } else {
  
  if(stat.xp < args[2]) return message.reply(`У ${pUser} нет столько опыта.`)
  
  stat.xp = stat.xp - +args[2];
  stat.save().catch(err => console.log(err));
  message.channel.send(`${message.author} изъято у ${pUser} ${args[2]} опыта.`);
    }
  })
}
else return message.reply("Недостаточно прав для использования :upside_down:")
}
module.exports.help = {
    name: "takexp"
}