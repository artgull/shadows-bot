const Discord = require("discord.js")
const mongoose = require("mongoose");
const fs = require("fs")
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let klan = message.guild.members.cache.get(message.author.id).displayName
    let user = message.author.id;
    let pUser = message.guild.member(message.mentions.users.first())|| message.guild.members.get(args[1])
    if(args[1] === undefined) {
    Stat.findOne({
        userID: user
    }, (err, stat) => {
        if(err) console.log(err);
        if(!stat) {
            const newStat = new Stat({
                userID: user,
                userguildName: message.guild.members.cache.get(message.author.id).displayName,
                guildid: message.guild.id,
                userName: message.author.tag,
                level: 1,
                xp: 0,
                money: 0,
                voicetime: 0,
                voicehours: 0,
                voiceall: 0

            })
            if(err) console.log(err);
            newStat.save().catch(err => console.log(err));
        } else {

    let uCoins = stat.money;

    let coinEmbed = new Discord.MessageEmbed()
    .setAuthor(klan)
    .setThumbnail(message.author.avatarURL)
    .setColor("#4169e1")
    .addField("На счету",`${uCoins} 👻`);

    message.channel.send(coinEmbed);
        }
    })
    } else {
    Stat.findOne({
        userID: pUser.id
    }, (err, stat) => {
        if(err) console.log(err);
        if(!stat) {
            const newStat = new Stat({
                userID: pUser.id,
                userguildName: message.guild.members.cache.get(pUser.id).displayName,
                guildid: message.guild.id,
                userName: pUser.displayName,
                level: 1,
                xp: 0,
                money: 0,
                voicetime: 0,
                voicehours: 0,
                voiceall: 0

            })
            if(err) console.log(err);
            newStat.save().catch(err => console.log(err));
        } else {
    let userav = message.mentions.users.first().avatarURL
    let cash = stat.money
    let coinEmbed = new Discord.MessageEmbed()
    .setTitle(`${pUser.displayName}`)
    .setColor("#4169e1")
    .setDescription(`На счету ${cash} 👻`)
    .setThumbnail(userav)
    try {
        fs.appendFileSync("./log.txt", `\n[${message.createdAt}] ${message.author.id}(${message.guild.members.get(message.author.id).nickname}) проверил баланс ${pUser.id}(${pUser.displayName})`, 'utf-8')
    }
    catch(err) {
        console.log(err)
    }

    message.channel.send(coinEmbed);
        }
    
    })
}
}
module.exports.help = {
    name: "баланс"
}