const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    message.delete(1);
    const shopembed = new Discord.RichEmbed()
    .setTitle("**Магазин**")
    .setDescription("Здесь вы можете купить уникальную роль")
    .addField(message.guild.member, "3000 👻")
    message.channel.send(shopembed);

}
module.exports.help = {
    name: "магазин"
}