const Discord = require("discord.js");
const coins = require('../coins.json');
const fs = require('fs')
const shoproles = fs.readFileSync('shoproles.json', 'utf8');

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let author = message.author.id;
    let cat = '435499299137257499';
    let catnesah = '648511794926583808';
    let name = args[2];
    let namech //= args[2];
    let rcheck = message.guild.member(author);

    if(!coins[author]){
        coins[author] = {
            level: 1,
            xp: 0,
            coins: 0
        };
    }

    if (args[1] === "гусь") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        if(coins[author].coins < 50) return message.channel.send("Недостаточно душ для покупки");
        if (rcheck.roles.has('487921944767758336')) return message.channel.send(`У вас уже есть роль **Гусь**`);
        message.guild.members.get(author).addRole(message.guild.roles.find("name", "Гусь"));
        coins[author].coins = coins[author].coins - 50;
        message.reply(`Вы успешно купили роль **Гусь**!`);
        return;
        
    }
    else if (args[1] === "демон") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        if (coins[author].coins < 500) return message.channel.send("Недостаточно душ для покупки");
        if (rcheck.roles.has('487921687258595351')) return message.channel.send(`У вас уже есть роль **Архонт**`);
        message.guild.members.get(author).addRole(message.guild.roles.find("name", "Архонт"));
        coins[author].coins = coins[author].coins - 500;
        message.reply(`Вы успешно купили роль **Демон**!`);
        
     }
    
    else if (args[1] === "канал") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        //if (args[2] === undefined) return message.channel.send("Не указано название канала. Правильное использование `-buy канал имя канала`");
        if(coins[author].coins < 1000000) return message.channel.send("Недостаточно душ для покупки");
        message.channel.send("Введите название канала")
        let filter = m => m.author.id === message.author.id;
        try {
        let msg = await message.channel.awaitMessages(filter, {maxMatches: 1 , time: '15000', errors: ['time'] });
        let kanal = msg.first().content;
        message.guild.createChannel(kanal, 'voice').then(ma => {
            ma.setParent(catnesah);
            ma.lockPermissions();
        })
        coins[author].coins = coins[author].coins - 1000000;
        message.reply(`Вы успешно купили канал **${kanal}**!`);
        }
        catch(ex) {
            message.channel.send("Вы должны указать название в течении 15 секунд. Попробуйте еще раз.")
        }
       /*
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