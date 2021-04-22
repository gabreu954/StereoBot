const Discord = require("discord.js");

module.exports = {

    name: "about",
    description: "About the bot!",
    
    execute(message, args){

//#region Embed Message
        const embed = new Discord.MessageEmbed()

            .setColor('#d18432')
            .setTitle(':dvd::dvd: Sobre o BOT :dvd::dvd:')
            .addFields(
                {name:':pencil: Name',value:'StereoBot'},
                {name:':keyboard: Author', value:'Gabriel Abreu(g4breU#1972)'},
                {name:':floppy_disk: Version', value:'v1.0.0'}
            )
            .setFooter('© All rights reserved ','');
//#endregion

        message.channel.send(embed);
        
    }

};