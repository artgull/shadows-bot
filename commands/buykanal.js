const Discord = require("discord.js");
const coins = require('../coins.json');
const fs = require('fs')
const shoproles = JSON.parse(fs.readFileSync('shoproles.json', 'utf8'));

module.exports.run = (bot, message, args) => {
    let author = message.author.id;
    let cat = '435499299137257499';
    let catneshad = '648511794926583808';
    let name = args[2];
    let namech = args[2];
    let rcheck = message.guild.member(author);
    message.delete(1);
     if (args[1] === "канал" || "уникальный голосовой канал") {
        if (args[2] === undefined) return message.channel.send("Не указано название канала. Правильное использование `-buy канал имя канала`");
        if(coins[author].coins < 1000000) return message.channel.send("Недостаточно душ для покупки");
        message.guild.createChannel(namech, 'voice').then(m => {
            m.setParent(cat);
        })
        coins[author].coins = coins[author].coins - 1000000;
        message.reply(`Вы успешно купили канал **${name}**!`);
    }
}

module.exports.help = {
    name: "buy канал"
}