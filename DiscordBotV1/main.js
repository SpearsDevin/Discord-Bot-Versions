const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

var fs = require('fs');

client.once('ready', () => {
    console.log('Riddle Bot is Online!');
});


client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();
    
    if(command === 'riddle'){
        var files = fs.readdirSync('random/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());

    } else if (command == 'theoffice'){
        var files = fs.readdirSync('TheOffice/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());

    } else if (command == 'parksnrec'){
        var files = fs.readdirSync('ParksnRec/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
    }
});

client.login('');