const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete();
    let arh = message.guild.roles.cache.get('487921687258595351');
    //${arh.toString()} 100 👻
    let shopembed = new Discord.MessageEmbed()
    .setTitle("**Магазин**")
    .setDescription(`

    **Уникальный голосовой канал**, 1000000 👻 (-buy канал)
    
    **Уникальная роль**, 1000000 👻 (-buy роль)


    Названия каналов и ролей не должны содержать нецензурщину, оскорбления и прочие непотребства на усмотрение администрации.
    В случае нарушения правила канал/роль будут удалены без возврата душ.

    
    `)
    .setThumbnail('https://cdn.discordapp.com/attachments/681409687039901726/686235348480950292/botava.png')
    .setColor("#4169e1")
    //.setFooter("Используй -buy для покупки")
    //.addField(message.guild.member, "3000 👻")
    message.channel.send(shopembed);

}
module.exports.help = {
    name: "магазин"
}