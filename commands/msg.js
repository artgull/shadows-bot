const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(message.author.id !== '218611183886794753') return message.reply("каво?")
    message.delete(0)
    let msg = message.content
    console.log(msg)
    message.channel.send(msg)
}
module.exports.help = {
    name: "чат"
}