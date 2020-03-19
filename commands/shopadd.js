const Discord = require("discord.js")
const shop = require ('./shop.js')

module.exports.run = async (bot, message, args) => {
    let pname = args[1];
    let price = args[2];
    shopembed.addField(pname, price)
}
module.exports.help = {
    name: "shopadd"
}