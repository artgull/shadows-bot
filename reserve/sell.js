const Discord = require("discord.js")
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Shop', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Shop = require("../models/shop.js");

module.exports.run = (bot, message, args) => {
    let avtor = message.author.id
    let nick = message.guild.members.get(avtor).nickname
    let kanal = '435499299137257497'

    const channel = message.client.channels.find('id', kanal)
    message.delete()
    
    message.channel.send("Введите название товара")
    let filter = m => m.author.id === message.author.id;
    
    message.channel.awaitMessages(filter, {max: 1, time: '15000', errors: ['time'] }).then(collected => {
       
        let embed = new Discord.RichEmbed()
        .setColor("#4169e1")
        .setTitle(`${nick} выставляет ${collected.first().content} на продажу`)
        channel.send(embed)

    }).catch(err => message.reply("Время вышло, попробуйте еще раз"));
    
    
   
    /*catch(ex) {
       return message.reply("Время вышло, попробуйте еще раз.")
    }*/
}
module.exports.help = {
    //name: "продать"
}