const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

var fs = require('fs');

const cron = require('node-cron');


client.once('ready', () => {
    console.log('Riddle Bot is Online!');
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);

    const command = args.shift().toLowerCase();
    
    var  myid="<@683686127428829194>" 
    var rookie=`<@&${'837874063467610152'}>`

    function halftime() {
        message.channel.send(`<@&${'837874063467610152'}>`)
        message.channel.send("**-Only 2 hours left till the answer for the riddle-**")
    }

    function start(){
        message.channel.send("**-The answer of the riddle will be given at 11pm CT, there will be a reminder 2 hours before! Have fun!!-**")
    }

    if(message.content.startsWith(prefix + ">")) {
        message.reply('Thank you for your answer! It will be given with the riddle');
        console.log(`${message.author}` +"'s answer to the riddle is   "+ `${message}`)
        client.users.fetch("683686127428829194", false).then(dm => {
            dm.send(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
        })
        const task = cron.schedule('5 0 23 * * *', () => {
            client.channels.cache.get('837779852957581341').send( `${message.author}` +"'s answer to the riddle is   "+ `*${message}*`) 
                },{ 
                timezone: "America/Chicago"      
        });
        task.start();
    }
    if(message.content.startsWith(prefix + "join")){
        let role = message.member.guild.roles.cache.find(role => role.name === "[R]Rookie");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.channel.send(`${message.author} *Thank you for joining us for the Riddles. If you have any questions use* **-help**`)
    
    }
    if(message.content.startsWith(prefix +"leave")){
        let role = message.member.guild.roles.cache.find(role => role.name === "[R]Rookie");
        if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
        message.channel.send(`${message.author} *Were sorry to see you leave we hope to see you join again in the future. If you change your mind use* **-join**`)
    }

    if(command === 'riddle'){
        message.channel.send(`<@&${'837874063467610152'}>`);
        var files = fs.readdirSync('random/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        start();

        const half = cron.schedule('0 0 21 * * *', () =>{
            halftime();
            },{                
                timezone: "America/Chicago"      
        });
        half.start();
        
        const answer = cron.schedule('0 0 23 * * *', () =>{
            message.channel.send(`<@&${'837874063467610152'}>`);
            var answer = fs.readFileSync("answer/" + chosen.toString());
            message.channel.send(answer.toString());
            },{                  
                timezone: "America/Chicago"      
        });
        answer.start();
        
        const thanks = cron.schedule('10 0 23 * * *', () => {
            client.channels.cache.get('837779852957581341').send("Thank you everyone for your answers!");
            },{  
                
                timezone: "America/Chicago"      
        });
        thanks.start(); 
  
        function dm(){
            client.users.fetch("683686127428829194", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
       function dmtwo(){
            client.users.fetch("766353364933410820", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
        setTimeout(dm, 1000);
        setTimeout(dmtwo, 1000);

    } else if (command == 'dm-all'){
        let role = message.guild.roles.cache.get('837874063467610152', false).members;
        message.channel.send(`**Everyone with the** <@&${'837874063467610152'}> **have been directly messaged, please put your answers in there starting with --**`)
        role.forEach(member=> {        
           member.send('Hey! this is the riddle bot, please start your answer off with **->**')
        })
          
    } else if (command == 'dm'){
        message.author.send('Hey! this is the riddle bot, please start your answer off with **->**')

    } else if (command == 'theoffice'){
        message.channel.send(`<@&${'837874063467610152'}>`);
        var files = fs.readdirSync('TheOffice/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        start();
        
        const half = cron.schedule('0 0 21 * * *', () =>{
            halftime();
            },{                
                timezone: "America/Chicago"      
        });
        half.start();
        
        const answer = cron.schedule('0 0 23 * * *', () =>{
            message.channel.send(`<@&${'837874063467610152'}>`);
            var answer = fs.readFileSync("answer/" + chosen.toString());
            message.channel.send(answer.toString());
            },{                  
                timezone: "America/Chicago"      
        });
        answer.start();
        
        const thanks = cron.schedule('10 0 23 * * *', () => {
            client.channels.cache.get('837779852957581341').send("Thank you everyone for your answers!");
            },{     
                timezone: "America/Chicago"      
        });
        thanks.start(); 
        
        function dm(){
            client.users.fetch("683686127428829194", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
       function dmtwo(){
            client.users.fetch("766353364933410820", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
        setTimeout(dm, 500);
        setTimeout(dmtwo, 500);

    } else if (command == 'parksnrec'){
        message.channel.send(rookie);
        var files = fs.readdirSync('ParksnRec/')
        let chosen = files[Math.floor(Math.random() * files.length)] 
        var data = fs.readFileSync(chosen.toString()); 
        console.log(chosen.toString()) 
        message.channel.send(data.toString());
        start();
        
        const half = cron.schedule('0 0 21 * * *', () =>{
            halftime();
            },{                
                timezone: "America/Chicago"      
        });
        half.start();
        
        const answer = cron.schedule('0 0 23 * * *', () =>{
            message.channel.send(`<@&${'837874063467610152'}>`);
            var answer = fs.readFileSync("answer/" + chosen.toString());
            message.channel.send(answer.toString());
            },{                  
                timezone: "America/Chicago"      
        });
        answer.start();
        
        const thanks = cron.schedule('10 0 23 * * *', () => {
            client.channels.cache.get('837779852957581341').send("Thank you everyone for your answers!");
            },{  
                timezone: "America/Chicago"      
        });
        thanks.start(); 
        
        function dm(){
            client.users.fetch("683686127428829194", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
       function dmtwo(){
            client.users.fetch("766353364933410820", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
        setTimeout(dm, 500);
        setTimeout(dmtwo, 500);

    } else if (command == 'update'){
        message.channel.send(`${message.author}`);
        message.channel.send("*Welcome to Riddle Bot v2, this version has added the feature to Dm the Riddle bot your answer and for it to be given along with the answer later in the day for everyone on the server to see. The feature to Add the riddle role to yourself was also added and you also have the ability to remove it with* **-join** and **-leave**")
        message.channel.send("*There will be more updates to come so please bare with us for now and if you have any suggestions please feel free to contact* " + myid + " *Or if you had any other ideas for other discord bots*")
        message.channel.send("If you would like to see what was added in previous version please use the command **-previous**")
    }
    else if (command == 'previous'){
        message.channel.send("Riddle Bot v1.2, this updated version will now give the answer to the riddle at 11pm CT after the **-riddle** command is put in chat. The 11pm CT time limit is to give everyone enough time to submit an answer, there will be a reminder given 2 hours before the answer is given. We want to thank you all for competing, Have Fun!")
    }
    if (message.content.startsWith(prefix + 'help')){
        message.channel.send("**-join** = This adds the Riddle role so you will be pinged for all of the riddle")
        message.channel.send("**-leave** = This will remove the Riddle role from you and you will no longer be pinged")
        message.channel.send("**-riddle** = This will just give you a random themed riddle")
        message.channel.send("**-theoffice** = This will give you riddles based of the USA version of The Office")
        message.channel.send("**-parksnrec** = (coming soon) but it will be riddles based off of Parks and Recreation")
        message.channel.send("**-dm** = This will start a private message with the riddle bot where you can give your answers to the various riddles")
        message.channel.send("**-update** = This will give you information about what was added in the last update")
        message.channel.send("**-previous** = This command will tell you about all of the previous versions of the riddle bot and what was added in each version")
        message.channel.send("**->** = This is a command that is used to dm the Riddle Bot, (for example ***->This is my answer to the riddle***) the **->** is the intitial command")
        message.channel.send("*If you have anymore question please ask*"+ myid)

    }
});

function stopMe() {
    console.log("Hello");
}

setInterval(stopMe, 500);


client.login('');
