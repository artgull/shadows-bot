const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(message.author.id !== '218611183886794753' && message.channel.type === "dm") return
    let msg = args.slice(2).join(" ")
    let nChannel = bot.channels.cache.get(args[1])
    //console.log(nChannel)
    nChannel.send(msg)
}
module.exports.help = {
    name: "чат"
}
