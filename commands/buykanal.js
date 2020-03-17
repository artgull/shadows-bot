const Discord = require("discord.js");
const coins = require('../coins.json');
const fs = require('fs')
const shoproles = JSON.parse(fs.readFileSync('shoproles.json', 'utf8'));

module.exports.run = (bot, message, args) => {
    let author = message.author.id;
    let cat = '435499299137257499';
    let catneshad = '648511794926583808';
    let name = args[2];
    let namech = args[1];
    let rcheck = message.guild.member(author);
    message.delete(1);
    console.log(args)
     //if (args[1] === "канал" || "уникальный голосовой канал") {
        if (args[1] === undefined) return message.channel.send("Не указано название канала. Правильное использование `-buy-канал имя канала`");
        if(coins[author].coins < 1000000) return message.channel.send("Недостаточно душ для покупки");
        if(!args[2] === undefined) namech = namech + args[2];
        console.log(args[2], namech)
        message.guild.createChannel(namech, 'voice').then(m => {
            m.setParent(catneshad);
        })
        coins[author].coins = coins[author].coins - 1000000;
        message.reply(`Вы успешно купили канал **${namech}**!`);
    //}
}

module.exports.help = {
    name: "buy-канал"
}