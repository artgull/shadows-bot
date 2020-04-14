const Discord = require("discord.js");
const mongoose = require("mongoose");
const fs = require('fs')
const shoproles = fs.readFileSync('shoproles.json', 'utf8');
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");
module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let author = message.author.id;
    let cat = '435499299137257499';
    let catnesah = '648511794926583808';
    let name = args[2];
    let namech //= args[2];
    let rcheck = message.guild.member(author);

    Stat.findOne({
        userID: message.author.id
        
    }, (err, stat) => {
        if(err) console.log(err);
        if(!stat) {
            const newStat = new Stat({
                userID: message.author.id,
                userName: message.author.tag,
                guildid: message.guild.id,
                userguildName: message.guild.members.get(message.author.id).nickname,
                level: 1,
                xp: xpadd,
                money: cashadd

            })
            newStat.save().catch(err => console.log(err));
        } else {

    if (args[1] === "гусь") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        if(stat.money < 50) return message.channel.send("Недостаточно душ для покупки");
        if (rcheck.roles.has('487921944767758336')) return message.channel.send(`У вас уже есть роль **Гусь**`);
        message.guild.members.get(author).addRole(message.guild.roles.find("name", "Гусь"));
        stat.money = stat.money - 50;
        message.reply(`Вы успешно купили роль **Гусь**!`);
        stat.save().catch(err => console.log(err));
        return;
        
    }
    else if (args[1] === "демон") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        if (stat.money < 500) return message.channel.send("Недостаточно душ для покупки");
        if (rcheck.roles.has('487921687258595351')) return message.channel.send(`У вас уже есть роль **Архонт**`);
        message.guild.members.get(author).addRole(message.guild.roles.find("name", "Архонт"));
        stat.money = stat.money - 500;
        message.reply(`Вы успешно купили роль **Демон**!`);
        stat.save().catch(err => console.log(err));
     }
    
    else if (args[1] === "канал") {
        if (args[1] === undefined) return message.channel.send("Не указано название товара. Правильное использование `-buy название товара`");
        //if (args[2] === undefined) return message.channel.send("Не указано название канала. Правильное использование `-buy канал имя канала`");
        if(stat.money < 1000000) return message.channel.send("Недостаточно душ для покупки");
        message.channel.send("Введите название канала")
        let filter = m => m.author.id === message.author.id;
        try {
        let msg = message.channel.awaitMessages(filter, {maxMatches: 1 , time: '15000', errors: ['time'] });
        let kanal = msg.first().content;
        message.guild.createChannel(kanal, 'voice').then(ma => {
            ma.setParent(catnesah);
            ma.lockPermissions();
        })
        stat.money = stat.money - 1000000;
        stat.save().catch(err => console.log(err));
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
    })
}

module.exports.help = {
    name: "buy"
}