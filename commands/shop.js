const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    let arh = message.guild.roles.get('487921687258595351');
    let shopembed = new Discord.RichEmbed()
    .setTitle("**Магазин**")
    .setDescription(`

    **Уникальный голосовой канал**, 1000000 👻
    ${arh.toString()}, 500 👻
    
    `)
    .setThumbnail('https://cdn.discordapp.com/attachments/681409687039901726/686235348480950292/botava.png')
    .setColor("#4169e1")
    .setFooter("Используйте -buy для покупки")
    //.addField(message.guild.member, "3000 👻")
    message.channel.send(shopembed);

}
module.exports.help = {
    name: "магазин"
}