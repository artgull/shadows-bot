const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(message.author.id !== '218611183886794753') return message.reply("каво?")
    let msg = args.slice(1).join(" ")
    message.delete().catch()
    message.channel.send(msg)
}
module.exports.help = {
    name: "чат"
}