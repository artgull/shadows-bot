const Discord = require('discord.js');
const client = new Discord.Client(); // у него вместо клиент был бот (2 урок)
client.commands = new Discord.Collection();
const fs = require('fs');
const DBL = require("dblapi.js");
let config = require('./botconfig.json');
let token = config.token;
let prefix = config.prefix;
//const dbl = new DBL(token, client);

fs.readdir('./cmds/', (err, files) => {
    if (err) console.log(err);
    let jsfiles = files.filter(f => f.split(".").pop() === "js"); //фильтруем файлы с окончанием js
    if (jsfiles.length <= 0) console.log("no commands to load!!");
    console.log(`Loaded ${jsfiles.length} command(s)`);
    jsfiles.forEach((f, i) => {
        let props = require(`./cmds/${f}`);
        console.log(`${i+1}.${f} Loaded!`);
        client.commands.set(props.help.name, props);
    });
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.login(token);

client.on('message', async message => {
    if (message.author.bot) return; //Ничего не делать, если автор сообщения - бот
    //if (message.chanel.type == "dm") return; // Ничего не делать, если сообщение прислано в лс
    let user = message.author.username;
    let userid = message.author.id;
    let messageArray = message.content.split(" "); //Разделение контента сообщения на части и запись их в массив
    let command = messageArray[0].toLowerCase(); //toLowerCase преобразовывает все заглавные символы в прописные, например ПриВет ЛоХ = привет лох
    let args = messageArray.slice(prefix.lenght); //В расчет идут элементы массива после элемента с номером, обозначенным длинной префикса. Этот элемент включительно
    if (!message.content.startsWith(prefix)) return; //если сообщение НЕ начинается с префикса, то ничего не делать
    let cmd = client.commands.get(command.slice(prefix.length));
    if (cmd) cmd.run(client, message, args);
});
client.on('message', (message) => {
    if (message.content == "бот") {
        message.channel.send("Я тут! Привет!");
    };
    if (message.content == "лох") {
        message.channel.send("Лох тут ты");
    };
    if (message.content == "донатер") {
        message.channel.send("Донатир хуита тратата тратата. Завали свою ебучку, ебанная сучка");
    };
});
/*dbl.getUser("95579865788456960").then(user => {
    console.log(user.username) // "Tonkku"
});*/