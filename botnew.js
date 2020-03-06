const discord = require('discord.js');
const botconfig = require("./botconfig.json");
const bot = new discord.Client();
const prefix = botconfig.prefix;
const fs = require('fs');
bot.commands = new discord.Collection();
const coins = require('./coins.json');

const express = require('express');
const keepalive = require('express-glitch-keepalive');
const app = express();
app.use(keepalive);
app.get('/', (req, res) => {
res.json('Бот запущен!');
});
app.get("/", (request, response) => {
response.sendStatus(200);
});
app.listen(process.env.PORT);

fs.readdir('./frames/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("No commands to load."); return;
    }
    jsfiles.forEach((f, i) => {
        let props = require(`./frames/${f}`);
        console.log(`${i}.${f} Loaded!`);
        bot.commands.set(props.help.name, props);
        
    });
});

fs.readdir('./commands/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js");
    if (jsfiles.length <= 0) {
        console.log("No commands to load."); return;
    }
    jsfiles.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${i+1}.${f} Loaded!`);
        bot.commands.set(props.help.name, props);
        
    });
});

bot.on('message', async message => {
    if(message.guild.id === '291713993440231424') return;
    const args = message.content.slice(prefix.length).split(/ +/);
    let msg = message.content.toUpperCase();
    let user = message.author.username;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let userid = message.author.id;
    
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args); 
    
    //if(message.content.startsWith(botconfig.prefix) || message.author.bot) return;
    //else await exp(message.author)

    if(message.content.startsWith(botconfig.prefix) || message.author.bot) return;
    else {
    let xpadd = Math.floor(Math.random() * 15) + 5;
    let cashadd = Math.floor(Math.random() * 15) + 5;

    if(!coins[userid]) {
        coins[userid] = {
            level: 1,
            xp: 0,
            coins: 0
        };
    }

    
    let level = coins[userid].level;
    let pocket = coins[userid].coins;
    let exp = coins[userid].xp;
    let nextlv = level * 500;


    if(nextlv <= exp) {
        coins[userid].level++;
        message.author.send(`Вы лох, ваш уровень теперь - ${coins[userid].xp}`)
    } else {
        coins[userid].xp = exp + xpadd;
        coins[userid].coins = pocket + cashadd;
    }

        fs.writeFile("coins.json", JSON.stringify(coins), (err) => {
            if (err) console.log(err)
        });
       /* let coinEmbed = new discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#000FFF")
        .addField("🤡", `${coins[userid].coins} клоунов добавлено`);

        message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});*/

    }




/*                НИЖЕ НИЧЕГО НЕ ТРОГАТЬ!!!
                  НИЖЕ НИЧЕГО НЕ ТРОГАТЬ!!!
                  НИЖЕ НИЧЕГО НЕ ТРОГАТЬ!!!




        if(message.content === prefix + "билд"){
            const embed = new discord.RichEmbed()
            .setTitle("**Выберите на что хотите билд**")
            .setColor("#4169e1")
            .addField("Варфрейм", ":one:")
            .addField("Оружие", ":two:")
            .addField("Прочее", ":three:")
            .setFooter("Напишите цифру необходимого билда")
            const msg = await message.author.send(embed);
            const filter = collected => collected.author.id === message.author.id;
            const collected = await msg.channel.awaitMessages(filter, {
                max: 1,
                time: 50000,
            }).catch(() => {
                message.author.send('Время вышло');
            });
            if(collected.first().content === '1') return await message.author.send('Введите название нужного варфрейма');
            if(message.content === "баруук") await message.author.send('https://imgur.com/8eZ9Dtk')
                
        }
        if(message.content === "баруук"){
        const msg = await message.author.send('Working !');
        const filter = collected => collected.author.id === message.author.id;
        const collected = await msg.channel.awaitMessages(filter, {
            max: 1,
            time: 50000,
        }).catch(() => {
            message.author.send('Время вышло');
        });
        if(collected.first().content === '1') return message.author.send('https://imgur.com/8eZ9Dtk');
        message.author.send('Done !');
            }
        });*/
        
    
});
   
/*bot.on('message', async message => {
    let message.author = message.author;
    if(message.content === prefix + "apply"){
const msg = await message.author.send('Working !');
const filter = collected => collected.author.id === message.author.id;
const collected = await msg.channel.awaitMessages(filter, {
    max: 1,
    time: 50000,
}).catch(() => {
    message.author.send('Время вышло');
});
if(collected.first().content === '1') return message.author.send('https://imgur.com/8eZ9Dtk');
message.author.send('Done !');
    }
});
*/


bot.on('ready', () => {
    console.log('Bot ready');
    bot.user.setPresence({game:{name: 'в окно и не видит будущего', type: 3}});
});

bot.login(botconfig.token);