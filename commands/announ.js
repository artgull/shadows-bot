const Discord = require('discord.js')

module.exports.run = (bot,message,args) => {
    message.delete()
    if(message.author.id != '218611183886794753') return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Объявление')
    .setImage('https://cdn.discordapp.com/attachments/681409687039901726/736629693385539656/Screenshot_445.png')
    .setColor("#4169e1")
    let msg = args.slice(1).join(" ")
    embed.setDescription(msg);
    message.channel.send(embed)
    
}
module.exports.help = {
    name: "объ"
}