const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    let words = ['Да', 'Нет', 'Возможно', 'Не точно', 'Может быть', 'Спроси Игоря', 'Конечно!']
    let msg = args.slice(1).join(" ")
    var rand = Math.floor(Math.random() * words.length)
    if(args[1] === undefined) return message.reply("А где слова чтобы я мог гадать?")
    message.channel.send(`${words[rand]}, ${msg}`)
}

module.exports.help = {
    name: "шар"
}