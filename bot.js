var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {

    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !
            case 'play':
                bot.sendMessage({
                    to: channelID,
                    message: 'you can play with my ass all you want daddy :sweat_drops::sweat_drops::weary::sweat_drops::sweat_drops:'
                });
            break;
            
         }
     }
	 if (message.substring(0, 1) == 'y') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !
            case 'ikes':
                bot.sendMessage({
                    to: channelID,
                    message: ':sweat_drops::sweat_drops:yike my ass with your gigantic dragon sized cock:weary::sweat_drops::sweat_drops:'
                });
            break;
            
         }
     }
	  if (message.substring(0, 1) == 'w') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !
            case 'eeb':
                bot.sendMessage({
                    to: channelID,
                    message: 'お姉さんのチンチンが大好き'
                });
            break;
            
         }
     }
	 	  if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !
            case 'rank':
                bot.sendMessage({
                    to: channelID,
                    message: 'wow ranking retards based on time spent on this shithole. very gamer thing for you to do, upvotes on the left btw'
                });
            break;
            
         }
     }
	  	  if (message.substring(0, 1) == 'l') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !
            case 'evel':
                bot.sendMessage({
                    to: channelID,
                    message: ':sweat_drops::sweat_drops:you can level up your mario in my ass if you know what i mean:sweat_drops::sweat_drops:'
                });
            break;
            
         }
     }

if (message.substring(0, 1) == 'b') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !
            case 'ruh':
                bot.sendMessage({
                    to: channelID,
                    message: 'bruh'
                });
            break;
            
         }
     }
});