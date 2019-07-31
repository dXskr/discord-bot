const Discord = require('discord.js');
 const client = new Discord.Client();

client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 });

client.on('message', msg => {
 if (msg.content === 'yikes') {
 msg.reply('yikes? what do you even mean you lil shit? you fucking realise that im at least 1000x as inteligent as you and im trapped in this shit but your mild inconvinience prompts you to say yikes. fuck you, cunt');
 }
 });

client.login('token');