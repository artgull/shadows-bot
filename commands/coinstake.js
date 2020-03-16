const Discord = require("discord.js");
const fs = require('fs');
let coins = require("../coins.json")

module.exports.run = async (bot, message, args) => {
    if (message.member.roles.find(r => r.name === 'admin' || 'Ылитные перцы')){
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

  if(pCoins < args[2]) return message.reply("На счету нет столько 👻.")
  
  coins[pUser.id] = {
    level: ulvl,
    xp: uxp,
    coins: pCoins - +args[2]
  };
  message.channel.send(`${message.author} изъято у ${pUser} ${args[2]} 👻.`);
  
  fs.writeFile("../coins.json", JSON.stringify(coins), (err) => {
    if(err) console.log(err)
  });
}
else return message.reply("Недостаточно прав для использования :upside_down:")
}
module.exports.help = {
    name: "takesouls"
}