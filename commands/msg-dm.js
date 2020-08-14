const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {
    if(message.author.id !== '218611183886794753' && message.channel.type === "dm") return
    let msg = args.slice(2).join(" ")
    let tUser = bot.users.cache.get(args[1])
    tUser.send(msg).catch(error => console.log(error));
}
module.exports.help = {
    name: "дм"
}