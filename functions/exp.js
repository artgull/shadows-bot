const Discord = require('discord.js')
const fs = require("fs-extra")
const levels = require('../levels.json')
const cd = new Set()

module.exports = async function(user) {
    if(!cd.has(user.id)) {
        let xpadd = Math.floor(Math.random() * 11) + 10
        let cashadd = Math.floor(Math.random() * 11) + 7 

        if(!levels[user.id]) {
            levels[user.id] = {
                xp: 0,
                level: 1,
                cash: 0
            }
        }

        let exp = levels[user.id].xp
        let level = levels[user.id].level
        let pocket = levels[user.id].cash
        let nextlv = level * 500

        if(nextlv <= exp) {
            levels[user.id].level++
        } else {
            levels[user.id].xp = exp + xpadd
            levels[user.id].cash = pocket + cashadd
        }

        await fs.writeFile('./levels.json', JSON.stringify(levels), err => {
            if (err) console.log(err)
        })

        await cd.add(user.id)
        await setTimeout(() => cd.delete(user.id), 300000)
    }

}