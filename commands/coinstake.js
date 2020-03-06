const Discord = require("discord.js");
const fs = require('fs');
let coins = require("../coins.json")

module.exports.run = async (bot, message, args) => {
  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[1])
  
  if(!coins[pUser.id]) {
    coins[pUser.id] = {
      level: 1,
      xp: 0,
      coins: 0
    };
  }
  
  let pCoins = coins[pUser.id].coins
  let ulvl = coins[pUser.id].level
  let uxp = coins[pUser.id].xp

  if(pCoins < args[2]) return message.reply("")
  
  coins[pUser.id] = {
    level: ulvl,
    xp: uxp,
    coins: pCoins - +args[2]
  };
  message.channel.send(`${message.author} изъял у ${pUser} ${args[2]} кукурузок.`);
  
  fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
  });
}
module.exports.help = {
    name: "take"
}