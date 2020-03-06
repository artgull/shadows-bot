const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if(message.channel.id === '649568322207219755') {
            message.delete(1)
            const embed = new Discord.RichEmbed()
            .setTitle("**Рино:**")
            .setColor("#4169e1")
            .addField("Индекс",':one:')
            .addField("Топот",':two:')
            .addField("Сила",':three:')
            .addField("Все", ':four:')
            .setFooter("Напишите цифру необходимого билда")
                const msg = await message.author.send(embed);
                const filter = collected => collected.author.id === message.author.id;
                const collected = await msg.channel.awaitMessages(filter, {
                    max: 1,
                    time: 500000,
                }).catch(() => {
                    message.author.send('Время вышло');
                });
                if(collected.first().content === '1') 
                    return message.author.send('https://imgur.com/S0rO5Kz');
                else if(collected.first().content === '2')
                    return message.author.send('https://imgur.com/R6OOLiW');
                else if(collected.first().content === '3')
                    return message.author.send('https://imgur.com/LxDxdOz');
                else if(collected.first().content === '4')
                return message.author.send('https://imgur.com/S0rO5Kz, https://imgur.com/R6OOLiW, https://imgur.com/LxDxdOz');
        
}
}
module.exports.help = {
    name: "рино"
}