const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports.run = async (bot, message, args) => {
    const subReddits = ["dankmeme", "meme", "me_irl"];
    const random = subReddits[Math.floor(Math.random() * subReddits.length)];
    const img = await randomPuppy(random);
    let embed = new Discord.RichEmbed()
    .setImage(img)
    message.channel.send(embed);

}
module.exports.help = {
    name: "48678486486484"
}