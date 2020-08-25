const Discord = require("discord.js");
const fs = require('fs');
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = (bot, message, args) => {
    let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[1])
  var isNumber =  parseInt(args[2], 10)
  if(args[1] === undefined) return message.reply("Не указан человек которому нужно передать 👻")
  if(args[2] === undefined)  return  message.reply("Не указанно кол-во 👻")
  if(+args[2] < 0) return message.reply("Так нельзя 👺")
  if(+args[2] === 0) return message.reply("А ты забавный 🤡")
  if(isNaN(args[2]) == true) return message.reply("Так нельзя 👺")
  if(message.author.id === pUser.id) return message.reply("Так нельзя 👺")
  
  
  let mon
  Stat.findOne({
    userID: message.author.id
}, (err, stat) => {
    if(err) console.log(err);
    if(!stat) return message.reply('Транзакция не удалась.');

    else {
        if(stat.money < +args[2]) return message.reply("У тебя нет столько 👻")
        mon = +args[2]
  stat.money = stat.money - mon;
  stat.save().catch(err => console.log(err));
    }
  })


  Stat.findOne({
    userID: pUser.id
}, (err, stat) => {
    if(err) console.log(err);
    if(!stat) { return message.reply('Транзакция не удалась.') } 
    else {
        mon = +args[2]
  stat.money = stat.money + mon;
  stat.save().catch(err => console.log(err));
  message.channel.send(`${message.author} передал ${pUser} ${args[2]} 👻.`);
    }
  })
}
module.exports.help = {
    name: "передать"
}