const Discord = require("discord.js")
const fs = require("fs")

module.exports.run = (bot, message, args) => {
    
    if(message.author.id !== '218611183886794753') return
    message.delete(0)
    message.author.send("Лог", {files: ["../log.txt"]})

}
module.exports.help = {
    name: "getlog"
}