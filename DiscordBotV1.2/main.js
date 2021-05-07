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
    
    var  myid="<@683686127428829194>" 
    var rookie="<@825499310825013308>"

    function halftime() {
        message.channel.send(rookie)
        message.channel.send("**-Only 6 hours left till the answer for the riddle-**")
    }

    if(command === 'riddle'){
        message.channel.send(rookie);
        var files = fs.readdirSync('random/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        message.channel.send("**-The answer of the riddle will be given in 12 hours, there will be a reminder at the halfway mark!-**")
        setTimeout(halftime, 2.16e+7)
        function answer(){
            var answer = fs.readFileSync("answer/" + chosen.toString());
            message.channel.send(answer.toString());
        }
        setTimeout(answer, 4.32e+7);

    } else if (command == 'theoffice'){
        message.channel.send(rookie);
        var files = fs.readdirSync('TheOffice/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        message.channel.send("**-The answer of the riddle will be given in 12 hours, there will be a reminder at the halfway mark!-**")
        setTimeout(halftime, 2.16e+7)
        function answer(){
            var answer = fs.readFileSync("answer/" + chosen.toString());
            message.channel.send(answer.toString());
        }
        setTimeout(answer, 4.32e+7);

    } else if (command == 'parksnrec'){
        message.channel.send(rookie);
        var files = fs.readdirSync('ParksnRec/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        message.channel.send("**-The answer of the riddle will be given in 12 hours, there will be a reminder at the halfway mark!-**")
        setTimeout(halftime, 2.16e+7)
        function answer(){
            var answer = fs.readFileSync("answer/" + chosen.toString());
            message.channel.send(answer.toString());
        }
        setTimeout(answer, 4.32e+7);

    } else if (command == 'update'){
        message.channel.send(rookie)
        message.channel.send("Welcome to Riddle Bot v1.2, this updated version will now give the answer to the riddle 12 hours after the **-riddle** command is put in chat. The 12 hour time limit is to give everyone enough time to submit an answer, there will be a reminder given at 6 hours or the half way point. We want to thank you all for competing, Have Fun!")
        message.channel.send("There will be more updates to come so please bare with us for now and if you have any suggestions please feel free to contact " + myid + " Or if you had any other ideas for other discord bots")
    } else if (command == 'help'){
        message.channel.send("**-riddle** = This will just give you a random themed riddle")
        message.channel.send("**-theoffice** = This will give you riddles based of the USA version of The Office")
        message.channel.send("**-parksnrec** = (coming soon) but it will be riddles based off of Parks and Recreation")
        message.channel.send("**-update** = This will give you information about what was added in the last update")
    }
});


client.login('');