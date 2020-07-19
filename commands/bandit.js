const Discord = require('discord.js')
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("../models/stats.js");

module.exports.run = (bot, message, args) => {
    Stat.findOne({
        userID: message.author.id
        
    }, (err, stat) => {
        if(err) console.log(err);
    let mon = stat.money
    if(message.channel.id != '377700392093351946') return message.reply("Играть можно только в канале #👾other-bots")
    //if(isInteger(+args[1]) != true) return message.reply("Введи целое число")
    if(args[1] === undefined) return message.reply("Не указана ставка")
    if(+args[1] > stat.money) return message.reply("Ты не можешь поставить больше чем у тебя есть.")
    let emojies = ['👑', '💩', '⭐', '🍓', '🍒', '🍇']
    var rand1 = Math.floor(Math.random() * 6);var rand2 = Math.floor(Math.random() * 6);var rand3 = Math.floor(Math.random() * 6);
    let one = emojies[rand1];let two = emojies[rand2];let three = emojies[rand3];
    stat.money = mon - +args[1]
    stat.save().catch(err => console.log(err));
    /*
    👑 0
    💩 1
    ⭐ 2
    🍓 3
    🍒 4
    🍇 5
    */
    const embed = new Discord.MessageEmbed()
    .setTitle("Казино")
    .setColor("#4169e1")
    .setDescription(`
        ${one+two+three}

        Ты ничего не выйграл)))
    `)
    message.channel.send(embed).then(msg => {
  /*👑*/      if(rand1 === 0 && rand2 === 0 && rand3 === 0) {
            embed.setDescription(`
                ${one+two+three}
    
                Казна полна, милорд!

                **Выйграно ${+args[1] * 5}👻**
            `)
            stat.money = mon + +args[1] * 5
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
  /*👑*/    else if((rand1 === 0 && rand2 === 0) || (rand2 === 0 && rand3 === 0) || (rand1 === 0 && rand3 === 0) ) {
            embed.setDescription(`
                ${one+two+three}
    
                Дань собрана, милорд!
    
                **Выйграно ${+args[1] * 5}👻**
            `)
            stat.money = mon + +args[1] * 4
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
  /*💩*/    else if(rand1 === 1 && rand2 === 1 && rand3 === 1) {
            embed.setDescription(`
                ${one+two+three}
    
                Коллекторское агенство **FREEDOM FOR GEESE** изъяло у тебя души за неуплату долгов.

                **Потеряно ${+args[1] * 3}👻**
            `)
            stat.money = mon - +args[1] * 3
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*💩*/    else if((rand1 === 1 && rand2 === 1) || (rand2 === 1 && rand3 === 1) || (rand1 === 1 && rand3 === 1) ) {
            embed.setDescription(`
                ${one+two+three}
    
                Ты держал в руке пачку душ, но случайно отпустил их!
    
                **Потеряно ${+args[1] * 2}👻**
            `)
            stat.money = mon - +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*⭐*/    else if(rand1 === 2 && rand2 === 2 && rand3 === 2) {
            embed.setDescription(`
                ${one+two+three}
    
                Ты поймал звезду!
    
                **Выйграно ${+args[1] * 4}👻**
            `)
            stat.money = mon + +args[1] * 4
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*⭐*/    else if((rand1 === 2 && rand2 === 2) || (rand2 === 2 && rand3 === 2) || (rand1 === 2 && rand3 === 2) ) {
            embed.setDescription(`
                ${one+two+three}
    
                Падающая звезда заглянула в твой кошелек, ужаснулась и сунула туда немного своих душ!
    
                **Выйграно ${+args[1] * 3}👻**
            `)
            stat.money = mon + +args[1] * 3
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*🍓*/    else if(rand1 === 3 && rand2 === 3 && rand3 === 3) {
            embed.setDescription(`
                ${one+two+three}
    
                Клубничное ассорти. 
    
                **Выйграно ${+args[1] * 2}👻**
            `)
            stat.money = mon + +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*🍓*/    else if((rand1 === 3 && rand2 === 3) || (rand2 === 3 && rand3 === 3) || (rand1 === 3 && rand3 === 3) ) {
            embed.setDescription(`
                ${one+two+three}
    
                Миска клубники с душами.
    
                **Выйграно ${+args[1] * 2}👻**
            `)
            stat.money = mon + +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*🍒*/    else if(rand1 === 4 && rand2 === 4 && rand3 === 4) {
            embed.setDescription(`
                ${one+two+three}
    
                Вишенка на торте! 
    
                **Выйграно ${+args[1] * 2}👻**
            `)
            stat.money = mon + +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*🍒*/    else if((rand1 === 4 && rand2 === 4) || (rand2 === 4 && rand3 === 4) || (rand1 === 4 && rand3 === 4) ) {
            embed.setDescription(`
                ${one+two+three}
    
                Some cherries!
    
                **Выйграно ${+args[1] * 2}👻**
            `)
            stat.money = mon + +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*🍇*/    else if(rand1 === 5 && rand2 === 5 && rand3 === 5) {
            embed.setDescription(`
                ${one+two+three}
    
                Grape explosion! 
    
                **Выйграно ${+args[1] * 2}👻**
            `)
            stat.money = mon + +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
   /*🍇*/    else if((rand1 === 5 && rand2 === 5) || (rand2 === 5 && rand3 === 5) || (rand1 === 5 && rand3 === 5) ) {
            embed.setDescription(`
                ${one+two+three}
    
                Виноградная лоза испустила дух.
    
                **Выйграно ${+args[1] * 2}👻**
            `)
            stat.money = mon + +args[1] * 2
            stat.save().catch(err => console.log(err));
            msg.edit(embed)
        }
    });
    
})
}  
module.exports.help = {
    name: "казино"
}