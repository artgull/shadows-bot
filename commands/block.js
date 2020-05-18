const Discord = require("discord.js")
const fs = require("fs")
//const blocked = require("../blockedids.json")

//const blocks = fs.readFile("../blockedids.json", 'utf-8')

module.exports.run = (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first())|| message.guild.members.get(args[1])
    /*fs.appendFile("./blockedids.json", JSON.stringify(bUser.id), (err) => {
        if (err) throw err;
    })*/
    global.blocked = []
    global.blocked.push(bUser.toString())
    console.log(global.blocked)
}

module.exports.help = {
    name: "block"
}