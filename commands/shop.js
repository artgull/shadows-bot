const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    const shopembed = new Discord.RichEmbed()
    .setTitle("**Магазин**")
    .setDescription("Здесь вы можете купить какой нибудь прикол")
    .setThumbnail('https://cdn.discordapp.com/attachments/681409687039901726/686235348480950292/botava.png')
    .setColor("#4169e1")
    .addField("**Уникальный голосовой канал**", "1000000 👻")
    //.addField(message.guild.member, "3000 👻")
    message.channel.send(shopembed);

}
module.exports.help = {
    name: "магазин"
}