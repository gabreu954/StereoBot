//#region Constantes gerais
const fs = require('fs');
const Discord = require("discord.js");
const config = require("./config.json");
const prefix = config.prefix;
const client = new Discord.Client();
//#endregion

//#region Conexão
client.login(config.bot_token);

client.once('ready', () => {
    console.log('Ready!');
});
client.once('reconnecting', () => {
    console.log('Reconnecting!');
});
client.once('disconnect', () => {
    console.log('Disconnect!');
});
//#endregion

//#region Configurações de comandos por arquivo
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}
//#endregion

//#region Comandos

client.on("message",

    message => {

        if (message.author.bot)
            return;
        if (!message.content.startsWith(prefix))
            return;
        const commandBody = message.content.slice(prefix.length);
        const args = commandBody.trim().split(' ');
        const command = args.shift().toLowerCase();

        if (command == 'about' || command == 'sobre') {
            client.commands.get('about').execute(message, args);
        }
        else if(command == 'ping'){
            client.commands.get('ping').execute(message, args);
        }
        else if(command =='roll' || command == 'r'){
            client.commands.get('roll').execute(message, args);
        }
    }
);
//#endregion



