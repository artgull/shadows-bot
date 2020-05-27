const Discord = require("discord.js")
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(args[1] === "лвл") {
    Stat.find({
        guildid: message.guild.id
      }).sort([
        ['level', 'descending']
      ]).exec((err, res) => {
        if (err) console.log(err);

    let leadembed = new Discord.MessageEmbed()
    .setTitle("Таблица лидеров по уровню")
    .setColor("#4169e1")
    if(res.length === 0) {
        leadembed.setDescription("Пусто.")
    } else if(res.length < 5) {
        for(i = 0; i < res.length; i++) {
            let member = message.guild.members.cache.get(res[i].userID)
            if (member.user.nickname === null) {
                leadembed.addField(`${i+1}. ${member.user.username}`, `**⭐:** ${res[i].level}`, true);
            } else
            leadembed.addField(`${i+1}. ${member.user.nickname}`, `**⭐:** ${res[i].level}`, true);
        }
    } else {
        for(i = 0; i < 5; i++) {
            let member = message.guild.members.cache.get(res[i].userID)
            if (member.user.nickname === null) {
                leadembed.addField(`${i+1}. ${member.user.username}`, `**⭐:** ${res[i].level}`, true);
            } else
            leadembed.addField(`${i+1}. ${member.user.nickname}`, `**⭐:** ${res[i].level}`, true);
        }
    }
    message.channel.send(leadembed);
      })
    }


    else if(args[1] === "душ") {
        Stat.find({
            guildid: message.guild.id
          }).sort([
            ['money', 'descending']
          ]).exec((err, res) => {
            if (err) console.log(err);
    
        let leadembed = new Discord.MessageEmbed()
        .setTitle("Таблица лидеров по душам")
        .setColor("#4169e1")
        if(res.length === 0) {
            leadembed.setDescription("Пусто.")
        } else if(res.length < 5) {
            for(i = 0; i < res.length; i++) {
                let member = message.guild.members.cache.get(res[i].userID)
                if (member.user.nickname === null) {
                    leadembed.addField(`${i+1}. ${member.user.username}`, `**👻** ${res[i].money}`, true);
                } else
                leadembed.addField(`${i+1}. ${member.user.nickname}`, `**👻** ${res[i].money}`, true);
            }
        } else {
            for(i = 0; i < 5; i++) {
                let member = bot.users.cache.get(res[i].userID)
                if (member.nickname === null) {
                    leadembed.addField(`${i+1}. ${member.user.username}`, `**👻** ${res[i].money}`, true);
                } else
                leadembed.addField(`${i+1}. ${member.nickname}`, `**👻** ${res[i].money}`, true);
            }
        }
        message.channel.send(leadembed);
          })
    }


    else if(args[1] === "мсг") {
        Stat.find({
            guildid: message.guild.id
          }).sort([
            ['msgs', 'descending']
          ]).exec((err, res) => {
            if (err) console.log(err);
    
        let leadembed = new Discord.MessageEmbed()
        .setTitle("Таблица лидеров по сообщениям")
        .setColor("#4169e1")
        if(res.length === 0) {
            leadembed.setDescription("Пусто.")
        } else if(res.length < 5) {
            for(i = 0; i < res.length; i++) {
                let member = message.guild.members.cache.get(res[i].userID)
                if (member.nickname === null) {
                    leadembed.addField(`${i+1}. ${member.user.username}`, `**💬** ${res[i].msgs}`, true);
                } else
                leadembed.addField(`${i+1}. ${member.nickname}`, `**💬** ${res[i].msgs}`, true);
            }
        } else {
            for(i = 0; i < 5; i++) {
                let member = message.guild.members.cache.get(res[i].userID)
                if (member.nickname === null) {
                    leadembed.addField(`${i+1}. ${member.user.username}`, `**💬** ${res[i].msgs}`, true);
                } else
                leadembed.addField(`${i+1}. ${member.user.nickname}`, `**💬** ${res[i].msgs}`, true);
            }
        }
        message.channel.send(leadembed);
          })
    }
    else if(args[1] === "войс") {
        Stat.find({
            guildid: message.guild.id
          }).sort([
            ['voiceall', 'descending']
          ]).exec((err, res) => {
            if (err) console.log(err);
    
        let leadembed = new Discord.MessageEmbed()
        .setTitle("Таблица лидеров по времени в голосовых каналах(не считая AFK)")
        .setColor("#4169e1")
        if(res.length === 0) {
            leadembed.setDescription("Пусто.")
        } else if(res.length < 5) {
            for(i = 0; i < res.length; i++) {
                let member = message.guild.members.cache.get(res[i].userID)
                if (member.user.nickname === null) {
                    leadembed.addField(`${i+1}. ${member.user.username}`, `**:clock4:** ${res[i].voicehours}ч ${res[i].voicetime}мин`, true);
                } else
                leadembed.addField(`${i+1}. ${member.user.nickname}`, `**:clock4:** ${res[i].voicehours}ч ${res[i].voicetime}мин`, true);
            }
        } else {
            for(i = 0; i < 5; i++) {
                let member = message.guild.members.cache.get(res[i].userID)
                if (member.user.nickname === null) {
                    leadembed.addField(`${i+1}. ${member.user.username}`, `**:clock4:** ${res[i].voicehours}ч ${res[i].voicetime}мин`, true);
                } else
                leadembed.addField(`${i+1}. ${member.user.nickname}`, `**:clock4:** ${res[i].voicehours}ч ${res[i].voicetime}мин`, true);
            }
        }
        message.channel.send(leadembed);
          })
    }


    else return message.reply("Не указан тип таблицы");
}
module.exports.help = {
    name: "топ"
}