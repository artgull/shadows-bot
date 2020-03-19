const Discord = require("discord.js")
const coins = require("../coins.json")

module.exports.run = async (bot, message, args) => {
    await message.delete();
    /*coins.fetch({
        serverID: message.guild.id
      }).sort([
        ['coins', 'descending']
      ]).exec((err, res) => {
        if (err) console.log(err);*/

    let leadembed = new Discord.RichEmbed()
    .setTitle("Таблица лидеров")
    .setColor("#4169e1")
        for(i = 0; i < 10; i++) {
            let member = message.guild.members.get(coins[i].id)
            leadembed.addField(`${i + 1}. ${member.user.username}`, `**Души**: ${coins[i].coins}`);
        }
    message.channel.send(leadembed);

}
module.exports.help = {
    name: "топ///"
}