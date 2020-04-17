const Discord = require("discord.js")
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let klan = message.guild.members.get(message.author.id).nickname
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
                userguildName: message.guild.members.get(user).nickname,
                guildid: message.guild.id,
                userName: message.author.tag,
                level: 1,
                xp: 0,
                money: 0

            })
            if(err) console.log(err);
            newStat.save().catch(err => console.log(err));
        } else {

    let uCoins = stat.money;

    let coinEmbed = new Discord.RichEmbed()
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
    let userav = message.mentions.users.first().avatarURL
    let cash = stat.money
    let coinEmbed = new Discord.RichEmbed()
    .setTitle(`${pUser.displayName}`)
    .setColor("#4169e1")
    .setDescription(`имеет ${cash} 👻`)
    .setThumbnail(userav)
    //.addField(`${pUser} имеет `, `${cash} 👻`);

    message.channel.send(coinEmbed);
        }
    
    })
}
}
module.exports.help = {
    name: "баланс"
}