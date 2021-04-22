const Discord = require("discord.js");

module.exports = {

    name: 'roll',
    description: 'A nice thing to do!',

    execute(message, args) {


        if (!args.length)
            return message.channel.send(`Você não colocou argumentos, ${message.author}!`);

        if (args[0].indexOf('d') > -1) {

        //#region Variáveis Auxiliares

            var body = [];

            var bodyNum = [];

            var rollValues = [];

            let result = null;

            var num = null;

            var numberDice = null;

            var typeDice =  null;

            var soma = null;

            //#endregion
            
        //#region Lógica
            if (args[0].indexOf('+') > -1) {

                body = Separar(args[0], '+');

                num = parseInt(body[1]);

                bodyNum = Separar(body[0], 'd');

                numberDice = bodyNum[0];
                typeDice = bodyNum[1];

                rollValues = rollDice(numberDice, typeDice);

                soma = parseInt(somarRolagens(rollValues));

                result = soma+num;

            }

            else if (args[0].indexOf('-') > -1) {

                body = Separar(args[0], '-');

                num = parseInt(body[1]);

                bodyNum = Separar(body[0], 'd');

                numberDice = bodyNum[0];
                typeDice = bodyNum[1];

                rollValues = rollDice(numberDice, typeDice);

                soma = parseInt(somarRolagens(rollValues));

                result = soma-num;

            }
            else {

                body = Separar(args[0], 'd');

                numberDice = body[0];
                typeDice = body[1];

                rollValues = rollDice(numberDice, typeDice);

                result = parseInt(somarRolagens(rollValues));

            }
//#endregion

            message.channel.send(`${message.author}: [${rollValues}] :arrow_right:  ${result}`);
        }
        else {

            return message.channel.send(`Você não colocou os argumentos corretos, ${message.author}!`);
        }


        //#region Rolar dados

        function rollDice(number, dice) {

            var result = [];

            for (var i = 0; i < number; i++) {

                result[i] = 1 + Math.floor(Math.random() * dice);
            }
            return result;
        }
        //#endregion

        //#region Separador
        function Separar(args, index) {

            const body = args.split(index);
            return body;

        }
        //#endregion

        //#region Somar Array
        function somarRolagens(values) {

            let sum = 0
            for (let i = 0; i < values.length; i++) {
                sum += values[i];
            }
            return sum;
        }
        //#endregion
    

    }

};