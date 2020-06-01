const discord = require('discord.js');
const mongoose = require("mongoose");
const botconfig = require("./botconfig.json");
const bot = new discord.Client();
const prefix = botconfig.prefix;
const fs = require('fs');
bot.commands = new discord.Collection();

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

mongoose.connect('mongodb+srv://admin:t3h35q690h@cluster-up73q.mongodb.net/Data', {
    useNewUrlParser: true,
    useUnifiedTopology: true 
});
const Stat = require("./models/stats.js");

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

bot.on('guildMemberAdd', function(member)  {
    var helper = fs.readFileSync('./welcome.txt', 'utf-8');
    member.send(helper)
});
bot.on('guildMemberRemove', function(member) {
    let nChannel = bot.channels.cache.get('291713993440231424')
    nChannel.send(`${member.user.username}#${member.user.discriminator} вылетел с сервера со свистом. Теперь он будет свистеть в другом месте.`)
    console.log(member)
});
bot.on('voiceStateUpdate', (oldState, newState) => {
    let cUser = newState.id
    let xpadd = Math.floor(Math.random() * 20) + 20;
    let cashadd = Math.floor(Math.random() * 20) + 20;
    
    
    
    let oldStateChannel = oldState.channelID
    let newStateChannel = newState.channelID
    //console.log(`newch = ${newStateChannel.id}; oldch = ${oldStateChannel.id}`)

     if(newStateChannel === undefined)  console.log("member left")
    //if(oldStateChannel === undefined)  console.log("wtf")
    if(newStateChannel !== undefined) {
        console.log(newState.member.user.tag)
        if(newStateChannel === '291717359746416640') return 
        function voicer() {
            console.log(newState.member.user.id + newState.member.user.tag)
  
        Stat.findOne({
            userID: cUser
            
        }, (err, stat) => {
            if(err) console.log(err);
            if(!stat) {
            const newStat = new Stat({
                userID: cUser,
                userguildName: newState.guild.members.cache.get(cUser).displayName,
                guildid: newState.guild.id,
                userName: newState.member.user.tag,
                level: 1,
                xp: xpadd,
                money: cashadd,
                msgs: 0,
                voicetime: 1,
                voicehours: 0,
                voiceall: 1

            })
            newStat.save().catch(err => console.log(err));
        }
            
            else {
            nextlvl = stat.level * 2000;
            if(stat.xp >= nextlvl) stat.level++;
            stat.money = stat.money + cashadd;
            stat.xp = stat.xp + xpadd;
            stat.voicetime = stat.voicetime + 1;
            stat.voiceall = stat.voiceall + 1;
            if(stat.voicetime === 60) {
            stat.voicehours++;
            stat.voicetime = 0;
            }
            stat.save().catch(err => console.log(err));
            }
    })

    }
    
    setTimeout(voicer, 60000)
}
else if(oldStateChannel !== undefined && newStateChannel === undefined) console.log("member left")

});
bot.on('message', async message => {
    if(message.author.bot || message.channel.type === "dm") return;
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

    if(message.content.startsWith(botconfig.prefix) || message.author.bot || message.author.id === global.blocked) return;
    else {
        
        let xpadd;
        let cashadd;
        
    
    
     if(message.guild.roles.cache.find(r => r.name === 'Бес')) {
        xpadd = Math.floor(Math.random() * 22) + 17;
        cashadd = Math.floor(Math.random() * 22) + 17;
    } else if(message.guild.roles.cache.find(r => r.name === 'Демон')) {
        xpadd = Math.floor(Math.random() * 24) + 19;
        cashadd = Math.floor(Math.random() * 24) + 19;
    } else if(message.guild.roles.cache.find(r => r.name === 'Архонт' || 'Офицер' || 'Офицер в отставке' || 'Старший офицер' || 'Зам лидера' || 'Админ')) {
        xpadd = Math.floor(Math.random() * 26) + 21;
        cashadd = Math.floor(Math.random() * 26) + 21;
    } else { 
        xpadd = Math.floor(Math.random() * 20) + 10;
        cashadd = Math.floor(Math.random() * 20) + 10;
        
    }

    
    
 /*if (message.member.roles.find(r => r.name === 'Бес')){
        cashadd = cashadd * 1.2;
    } else if (message.member.roles.find(r => r.name === 'Архонт')){
        cashadd = Math.floor(cashadd * 1.5);
    } */
    
    Stat.findOne({
        userID: message.author.id
        
    }, (err, stat) => {
        if(err) console.log(err);
        if(!stat) {
            const newStat = new Stat({
                userID: message.author.id,
                userguildName: message.guild.members.cache.get(message.author.id).displayName,
                guildid: message.guild.id,
                userName: message.author.tag,
                level: 1,
                xp: xpadd,
                money: cashadd,
                msgs: 1,
                voicetime: 0,
                voicehours: 0,
                voiceall: 0

            })
            newStat.save().catch(err => console.log(err));
        }

    else {
        
        nextlvl = stat.level * 2000;
        if(stat.xp >= nextlvl) { stat.level++; message.author.send(`Поздравляю! Ты повысил уровень до ${stat.level}!`) }
        stat.money = stat.money + cashadd;
        stat.xp = stat.xp + xpadd;
        stat.msgs++;
        stat.save().catch(err => console.log(err));

    }

       /* let coinEmbed = new discord.RichEmbed()
        .setAuthor(message.author.username)
        .setColor("#000FFF")
        .addField("🤡", `${coins[userid].xpadd} клоунов добавлено`);

        message.channel.send(coinEmbed).then(msg => {msg.delete(5000)}); */
    
    })
    
    


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
        }); */
        

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
});*/ 



bot.on('ready', () => {
    console.log('Bot ready');
    bot.user.setPresence({game:{name: '-помощь для просмотра команд', type: 2}});
});

bot.login(botconfig.token);
