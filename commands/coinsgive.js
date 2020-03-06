const Discord = require("discord.js");
const fs = require('fs');
let coins = require("../coins.json")

module.exports.run = async (bot, message, args) => {
  let userid = message.author.id;
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  
  if(!coins[pUser.id]) {
    coins[pUser.id] = {
      coins: 0
    };
  }
  
  let pCoins = coins[pUser.id].coins
  let bank = coins[bank].coins

  if(bank < args[0]) return message.reply("В банке недостаточно мелочи.");
  
  coins[pUser.id] = {
    coins: pCoins + parseInt(args[0])
  };
  
  message.channel.send(`${message.author} вiдано ${pUser} ${args[2]} кукурузок.`);
  
  fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
  });
  
}
module.exports.help = {
    name: "выдать"
}