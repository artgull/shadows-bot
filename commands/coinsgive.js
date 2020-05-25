const Discord = require("discord.js");
const fs = require('fs');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot, message, args) => {
  message.delete()
  if (message.guild.member.hasPermission('KICK_MEMBERS')) {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
  
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
  
  stat.money = stat.money + +args[2];
  stat.save().catch(err => console.log(err));
  message.channel.send(`${message.author} выдано ${pUser} ${args[2]} 👻.`);
  try {
    fs.appendFileSync("./log.txt", `\n[${message.createdAt}] ${message.author.id}(${message.guild.members.cache.get(message.author.id).nickname}) выдал ${pUser.id}(${pUser.displayName}) ${args[2]} душ`, 'utf-8')
}
catch(err) {
    console.log(err)
}
 
    }
  })
}
else return message.reply("Недостаточно прав");
}
module.exports.help = {
    name: "givesouls"
}