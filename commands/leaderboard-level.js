const Discord = require("discord.js")
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    Stat.find({
        guildid: message.guild.id
      }).sort([
        ['level', 'descending']
      ]).exec((err, res) => {
        if (err) console.log(err);

    let leadembed = new Discord.RichEmbed()
    .setTitle("Таблица лидеров по уровню")
    .setColor("#4169e1")
    if(res.length === 0) {
        leadembed.setDescription("Пусто.")
    } else if(res.length < 5) {
        for(i = 0; i < res.length; i++) {
            let member = message.guild.members.get(res[i].userID)
            if (member.nickname === null) {
                leadembed.addField(`${i+1}. ${member.user.username}`, `**👻** ${res[i].money}`, true);
            } else
            leadembed.addField(`${i+1}. ${member.nickname}`, `**Уровень:** ${res[i].level}`, true);
        }
    } else {
        for(i = 0; i < 5; i++) {
            let member = message.guild.members.get(res[i].userID)
            if (member.nickname === null) {
                leadembed.addField(`${i+1}. ${member.user.username}`, `**👻** ${res[i].money}`, true);
            } else
            leadembed.addField(`${i+1}. ${member.nickname}`, `**Уровень:** ${res[i].level}`, true);
        }
    }
    message.channel.send(leadembed);
      })
}
module.exports.help = {
    name: "топ-лвл"
}