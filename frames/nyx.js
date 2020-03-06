const Discord = module.require("discord.js");
module.exports.run = async (bot,message,args) => {
    if(message.channel.id === '649568322207219755') {
            message.delete(1)
            const embed = new Discord.RichEmbed()
            .setTitle("**Никс:**")
            .setColor("#4169e1")
            .addField("Первый",':one:')
            .addField("Второй",':two:')
            .addField("Все", ':three:')
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
                    return message.author.send('ссылка на билд');
                else if(collected.first().content === '2')
                    return message.author.send('ссылка на билд');
                else if(collected.first().content === '3')
                    return message.author.send('ссылка на билд');
        
}
}
module.exports.help = {
    name: "никс"
}