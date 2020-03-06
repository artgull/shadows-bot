const discord = require('discord.js');
const bot = new discord.Client();
const prefix = '!';

// ================ЧТЕНИЕ ФАЙЛА======================
// Synchronous read
var data = fs.readFileSync('help.txt');
console.log("Synchronous read: " + data.toString());
 
console.log("Program Ended");



bot.on('message', async message => {

    let msg = message.content.toUpperCase();
    let sender = message.author;

    if(message.channel.id === '636460078509326336') {
        // ========чат=================
        /*if(msg === prefix + 'БАРУУК') {     
            message.reply('https://imgur.com/8eZ9Dtk');
        }
        if(msg === prefix + 'АРТЕМ') {       
            message.channel.send('дибил!');
        }
        if(msg === prefix + 'РИНО') {
            const embed = new discord.RichEmbed()
            .setTitle("**Рино:**")
            .setColor("#E34669")
            .addField("Индекс",':one:')
            .addField("Топот",':two:')
            .addField("Сила",':three:')
            .setFooter("Напишите цифру необходимого билда")
            message.channel.send(embed);
            var waitingforanswer = 1;
            
        }*/
        //==========лс=============
       
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
        /*if(message.content === "баруук"){
        const msg = await message.author.send('Working !');
        const filter = collected => collected.author.id === message.author.id;
        const collected = await msg.channel.awaitMessages(filter, {
            max: 1,
            time: 50000,
        }).catch(() => {
            message.author.send('Время вышло');
        });
        if(collected.first().content === '1') return sender.send('https://imgur.com/8eZ9Dtk');
        message.author.send('Done !');
            }
        });*/

    }
});
   
/*bot.on('message', async message => {
    let sender = message.author;
    if(message.content === prefix + "apply"){
const msg = await message.author.send('Working !');
const filter = collected => collected.author.id === message.author.id;
const collected = await msg.channel.awaitMessages(filter, {
    max: 1,
    time: 50000,
}).catch(() => {
    message.author.send('Время вышло');
});
if(collected.first().content === '1') return sender.send('https://imgur.com/8eZ9Dtk');
message.author.send('Done !');
    }
});
*/
bot.on('ready', () => {
    console.log('Bot ready');
});

bot.login('NjM2NzYzOTMxOTA1NjIyMDE2.XbKjMg.XnfXl33FYM2LkvFjl3IxcAl7H7s');




//=======================БОТ-ХЕЛПЕР + !help====================
bot.on('message', async message => {
    var aid = message.author.id;
    var name = message.author.username;
    
    if(message.channel.id === '649568322207219755') {
    if(message.content === prefix + "помощь") {
        message.delete(1)
        message.channel.send("```Привет! Вы обратились в службу поддержи XxXSHADOWSXxX. Для того чтобы мы вам помогли напишите описание проблемы. Обязательно поставьте перед сообщением знак '-' чтобы мы получили его.```");
        const filter = m => m.content.startsWith('-');
        const collector = message.channel.createMessageCollector(filter, {max: 1, time: 120000 });
        collector.on('collect', m => message.channel.send(`Ваше сообщение отправлено, пожалуйста ожидайте ответа.`));   //${m.content}
        /*message.delete()
        .then(msg => console.log(`Deleted message from ${msg.author.username}`))
        .catch(console.error);*/
        message.guild.createChannel(name, 'text');/*{
            /*type: 'category',
            permissionOverwrites: [{
              id: guild.id,
              deny: ['MANAGE_MESSAGES'],
              allow: ['SEND_MESSAGES']
            }]
          })*/
        //message.guild.createChannel(name, 'text');

        collector.on('collect', m => {
            const channel = message.client.channels.find('name', name)
            const embedhelp = new discord.RichEmbed()
            .setTitle("**Новая заявка**")
            .setColor("#ff0000")
            .setImage(`https://cdn.discordapp.com/emojis/628335713934376970.png?v=1`)
            .addField("Ник", `${message.author.username}#${message.author.discriminator}`)
            .addField("Проблема", `${m.content}`);

            channel.send(embedhelp);


        });
        collector.on('end', m => console.log(`Сбор закончен ${m.content}`));
    }
        if(message.content === prefix + 'help') {
            message.delete(1);
            const embedhelpcom = new discord.RichEmbed()
            .setTitle("**КОМАНДЫ KAMBUCHA:**")
            .setColor('#00ffff')
            .addField("**__Общедоступные команды__**", 'Эти команды может использовать любой')
            
            .addField("!help", 'получить данное сообщение.')
            .addField("!помощь ", `связь с офицерами в случае возникновения какой-либо проблемы или недопонимания.`)
            .addField("!*названиеварфрейма*", 'получить билды на этого фрейма.')
            
            //.addBlankField(1)
            fs.readFile('help.txt', function (err, data) {
                if (err) {
                    return console.error(err);
                 }
                // utf8.incode(data);
                message.channel.send(data.toString());
             });
              
            
            message.channel.send(embedhelpcom);
        }
        
    }
    if(message.content === prefix + "s") {

        var name = message.author.username;
        if(message.channel.name === name) {
        message.channel.send("Проблема решешна, удаляю канал..");

        message.channel.delete();
        }
        else return message.channel.send("Вы не можете удалить этот канал.")

    }
});
