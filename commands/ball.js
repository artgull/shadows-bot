const Discord = require('discord.js')

module.exports.run = (bot, message, args) => {
    //message.delete()
    let words = ['Да', 'Нет', 'Возможно', 'Не точно', 'Может быть', 'Спроси Игоря', 'Конечно!', 'Вопрос вне моей компетенции', 'Вопрос интимного характера', 'Ваша банковская карта заблокирована ЦБ РФ тел.8(495)1017407(беспл.РФ)', 'Этот абонент недавно появился в сети']
    var rand = Math.floor(Math.random() * words.length)
   // if(args[1] === undefined) return message.reply("А где слова чтобы я мог гадать?")
    message.channel.send(words[rand])
}

module.exports.help = {
    name: "шар"
}