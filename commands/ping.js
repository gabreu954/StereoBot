const Discord = require("discord.js");


module.exports = {

    name : 'ping',

    description : 'Ping!',

    execute(message, args){

        const timeTaken = Date.Now - message.createdTimestamp;
        message.channel.send(`Pong! \n A latência é de ${timeTaken}`);
        
    }
};



