const Discord = require("discord.js");
const coins = require('../coins.json');
const fs = require('fs')
const shoproles = fs.readFileSync('shoproles.json', 'utf8');

module.exports.run = async (bot, message, args) => {
    let author = message.author.id;
    let cat = '435499299137257499';
    let name = args[2];
    let namech //= args[2];
    let rcheck = message.guild.member(author);
   
    message.delete(1);
    if (args[1] === "гусь") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        if(coins[author].coins < 50) return message.channel.send("Недостаточно душ для покупки");
        if (rcheck.roles.has('487921944767758336')) return message.channel.send(`У вас уже есть роль **Гусь**`);
        message.guild.members.get(author).addRole(message.guild.roles.find("name", "Гусь"));
        coins[author].coins = coins[author].coins - 50;
        message.reply(`Вы успешно купили роль **Гусь**!`);
        return;
        
    }
    else if (args[1] === "архонт") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        if (coins[author].coins < 500) return message.channel.send("Недостаточно душ для покупки");
        if (rcheck.roles.has('487921687258595351')) return message.channel.send(`У вас уже есть роль **Архонт**`);
        message.guild.members.get(author).addRole(message.guild.roles.find("name", "Архонт"));
        coins[author].coins = coins[author].coins - 500;
        message.reply(`Вы успешно купили роль **Архонт**!`);
        
     }
    
    else if (args[1] === "канал") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        //if (args[2] === undefined) return message.channel.send("Не указано название канала. Правильное использование `-buy канал имя канала`");
        message.channel.send("Введите название канала")
        let counter = 0;
        const filter = m => !m.author.bot;
        const collector = new Discord.MessageCollector(message.channel, filter)
        collector.on('collect', (message, cal) => {
            console.log("Collected message: " + message.content);
            counter++;
            if(counter === 1) {
                collector.stop()
            }
        });
        collector.on('end', collected => {
            message.guild.createChannel(collected, 'voice')
        })
       /* if(coins[author].coins < 1000000) return message.channel.send("Недостаточно душ для покупки");
        message.guild.createChannel(m.content, 'voice').then(m => {
            m.setParent(cat);
        })
        coins[author].coins = coins[author].coins - 1000000;
        message.reply(`Вы успешно купили канал **${m.content}**!`);*/
    }
}

module.exports.help = {
    name: "buy"
}