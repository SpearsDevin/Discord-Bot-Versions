const Discord = require('discord.js'); //Importing all of discord files to allow it to connect to discord

const client = new Discord.Client();

const prefix = '-'; //This is the beginning command, everything will start with -

var fs = require('fs');

const cron = require('node-cron'); //Node for timezone

//This tells you when the bot is Online
client.once('ready', () => {
    console.log('Riddle Bot is Online!');
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message   => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    
    const command = args.shift().toLowerCase();
    
    var  myid="<@683686127428829194>" 

    //Global function to be called when the riddle is given
    function halftime() {
        message.channel.send(`<@&${'837874063467610152'}>`)
        message.channel.send("**-Only 2 hours left till the answer for the riddle-**")
    }

    //Global function to be called at 9pm CST
    function start(){
        message.channel.send("**-The answer of the riddle will be given at 11pm CT, there will be a reminder 2 hours before! Have fun!!-**")
    }

    //Dm command for Random Riddle
    if(message.content.startsWith( prefix + "R>")) {
        message.reply('Thank you for your answer! The Riddle Bot will tell you whether or not it was correct at 11pm CST, Thank you!!'); //This will be sent to who ever executes the -R> command
        console.log(`${message.author}` +"'s answer to the riddle is   "+ `${message}`) // There answer will be put in the console as well

        //Devin will receive a dm with a reaction to select
        client.users.fetch("683686127428829194", false).then(async dm => {
            const embed = new Discord.MessageEmbed();
            const correct = new Discord.MessageEmbed();
            const incorrect = new Discord.MessageEmbed();

            embed.setColor("#55FFFF")
            embed.setDescription(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
                const Filter = (user) => user.id == `683686127428829194`;
                const reactionMessage = await dm.send(embed);
                await reactionMessage.react("👍");
                await reactionMessage.react("👎");
                reactionMessage.awaitReactions(Filter, {max: 1,  errors: ["time"]}).then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === "👍" ) {
                        client.users.fetch("683686127428829194", false).then(async dm => {
                            dm.send(`${message.author}'s` + "answer was correct");
                        })

                        correct.setColor("#55FFFF")
                        correct.setDescription(`${message.author}` +"'s answer to the riddle was correct!!");
                        const task = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(correct) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task.start();
                        
                    } 
                    if (reaction.emoji.name === "👎"){ 
                        client.users.fetch("683686127428829194", false).then(async dm => {
                            dm.send(`${message.author}'s` + " answer was incorrect");
                        })

                        incorrect.setColor("#55FFFF")
                        incorrect.setDescription(`${message.author}` +"'s answer to the riddle was incorrect. Thank you for participating, maybe next time!!");
                        const task_two = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(incorrect) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task_two.start();
                    }
                })
            }) 

        //Brennen /will receive a dm with a reaction to select
        client.users.fetch("766353364933410820", false).then(async dm => {
            const embed = new Discord.MessageEmbed();
            const correct = new Discord.MessageEmbed();
            const incorrect = new Discord.MessageEmbed();

            embed.setColor("#55FFFF")
            embed.setDescription(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
                const Filter = (user) => user.id == `766353364933410820`;
                const reactionMessage = await dm.send(embed);
                await reactionMessage.react("👍");
                await reactionMessage.react("👎");
                reactionMessage.awaitReactions(Filter, {max: 1,  errors: ["time"]}).then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === "👍" ) {
                        client.users.fetch("766353364933410820", false).then(async dm => {
                            dm.send(`${message.author}'s` + "answer was correct");
                        })

                        correct.setColor("#55FFFF")
                        correct.setDescription(`${message.author}` +"'s answer to the riddle was correct!!");
                        const task = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(correct) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task.start();
                        
                    } 
                    if (reaction.emoji.name === "👎"){ 
                        client.users.fetch("766353364933410820", false).then(async dm => {
                            dm.send(`${message.author}'s` + " answer was incorrect");
                        })

                        incorrect.setColor("#55FFFF")
                        incorrect.setDescription(`${message.author}` +"'s answer to the riddle was incorrect. Thank you for participating, maybe next time!!");
                        const task_two = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(incorrect) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task_two.start();
                    }
                })
            }) 
        }

    //Dm command for Office Riddle
    if(message.content.startsWith(prefix + "O>")) {
        message.reply('Thank you for your answer! It will be given with the riddle'); //This will be sent to who ever executes the -O> command
        console.log(`${message.author}` +"'s answer to the riddle is   "+ `${message}`) // There answer will be put in the console as well

        //Devin will receive a dm with a reaction to select
        client.users.fetch("683686127428829194", false).then(async dm => {
            const embed = new Discord.MessageEmbed();
            const correct = new Discord.MessageEmbed();
            const incorrect = new Discord.MessageEmbed();

            embed.setColor("#55FFFF")
            embed.setDescription(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
                const Filter = (user) => user.id == `683686127428829194`;
                const reactionMessage = await dm.send(embed);
                await reactionMessage.react("👍");
                await reactionMessage.react("👎");
                reactionMessage.awaitReactions(Filter, {max: 1,  errors: ["time"]}).then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === "👍" ) {
                        client.users.fetch("683686127428829194", false).then(async dm => {
                            dm.send(`${message.author}'s` + "answer was correct");
                        })

                        correct.setColor("#55FFFF")
                        correct.setDescription(`${message.author}` +"'s answer to the riddle was correct!!");
                        const task = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(correct) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task.start();
                        
                    } 
                    if (reaction.emoji.name === "👎"){ 
                        client.users.fetch("683686127428829194", false).then(async dm => {
                            dm.send(`${message.author}'s` + " answer was incorrect");
                        })

                        incorrect.setColor("#55FFFF")
                        incorrect.setDescription(`${message.author}` +"'s answer to the riddle was incorrect. Thank you for participating, maybe next time!!");
                        const task_two = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(incorrect) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task_two.start();
                    }
                })
            }) 

        //Brennen /will receive a dm with a reaction to select
        client.users.fetch("766353364933410820", false).then(async dm => {
            const embed = new Discord.MessageEmbed();
            const correct = new Discord.MessageEmbed();
            const incorrect = new Discord.MessageEmbed();

            embed.setColor("#55FFFF")
            embed.setDescription(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
                const Filter = (user) => user.id == `766353364933410820`;
                const reactionMessage = await dm.send(embed);
                await reactionMessage.react("👍");
                await reactionMessage.react("👎");
                reactionMessage.awaitReactions(Filter, {max: 1,  errors: ["time"]}).then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === "👍" ) {
                        client.users.fetch("766353364933410820", false).then(async dm => {
                            dm.send(`${message.author}'s` + "answer was correct");
                        })

                        correct.setColor("#55FFFF")
                        correct.setDescription(`${message.author}` +"'s answer to the riddle was correct!!");
                        const task = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(correct) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task.start();
                        
                    } 
                    if (reaction.emoji.name === "👎"){ 
                        client.users.fetch("766353364933410820", false).then(async dm => {
                            dm.send(`${message.author}'s` + " answer was incorrect");
                        })

                        incorrect.setColor("#55FFFF")
                        incorrect.setDescription(`${message.author}` +"'s answer to the riddle was incorrect. Thank you for participating, maybe next time!!");
                        const task_two = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(incorrect) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task_two.start();
                    }
                })
            }) 
    }

    //Dm command for ParksnRec Riddle
    if(message.content.startsWith(prefix + "P>")) {
        message.reply('Thank you for your answer! It will be given with the riddle'); //This will be sent to who ever executes the -P> command
        console.log(`${message.author}` +"'s answer to the riddle is   "+ `${message}`) // There answer will be put in the console as well

        //Devin will receive a dm with a reaction to select
        client.users.fetch("683686127428829194", false).then(async dm => {
            const embed = new Discord.MessageEmbed();
            const correct = new Discord.MessageEmbed();
            const incorrect = new Discord.MessageEmbed();

            embed.setColor("#55FFFF")
            embed.setDescription(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
                const Filter = (user) => user.id == `683686127428829194`;
                const reactionMessage = await dm.send(embed);
                await reactionMessage.react("👍");
                await reactionMessage.react("👎");
                reactionMessage.awaitReactions(Filter, {max: 1,  errors: ["time"]}).then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === "👍" ) {
                        client.users.fetch("683686127428829194", false).then(async dm => {
                            dm.send(`${message.author}'s` + "answer was correct");
                        })

                        correct.setColor("#55FFFF")
                        correct.setDescription(`${message.author}` +"'s answer to the riddle was correct!!");
                        const task = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(correct) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task.start();
                        
                    } 
                    if (reaction.emoji.name === "👎"){ 
                        client.users.fetch("683686127428829194", false).then(async dm => {
                            dm.send(`${message.author}'s` + " answer was incorrect");
                        })

                        incorrect.setColor("#55FFFF")
                        incorrect.setDescription(`${message.author}` +"'s answer to the riddle was incorrect. Thank you for participating, maybe next time!!");
                        const task_two = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(incorrect) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task_two.start();
                    }
                })
            }) 

        //Brennen /will receive a dm with a reaction to select
        client.users.fetch("766353364933410820", false).then(async dm => {
            const embed = new Discord.MessageEmbed();
            const correct = new Discord.MessageEmbed();
            const incorrect = new Discord.MessageEmbed();

            embed.setColor("#55FFFF")
            embed.setDescription(`${message.author}` +"'s answer to the riddle is   "+ `${message}`);
                const Filter = (user) => user.id == `766353364933410820`;
                const reactionMessage = await dm.send(embed);
                await reactionMessage.react("👍");
                await reactionMessage.react("👎");
                reactionMessage.awaitReactions(Filter, {max: 1,  errors: ["time"]}).then(collected => {
                    const reaction = collected.first();

                    if (reaction.emoji.name === "👍" ) {
                        client.users.fetch("766353364933410820", false).then(async dm => {
                            dm.send(`${message.author}'s` + "answer was correct");
                        })

                        correct.setColor("#55FFFF")
                        correct.setDescription(`${message.author}` +"'s answer to the riddle was correct!!");
                        const task = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(correct) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task.start();
                        
                    } 
                    if (reaction.emoji.name === "👎"){ 
                        client.users.fetch("766353364933410820", false).then(async dm => {
                            dm.send(`${message.author}'s` + " answer was incorrect");
                        })

                        incorrect.setColor("#55FFFF")
                        incorrect.setDescription(`${message.author}` +"'s answer to the riddle was incorrect. Thank you for participating, maybe next time!!");
                        const task_two = cron.schedule('5 0 23 * * *', () => {
                            client.channels.cache.get('850061744029958226').send(incorrect) 
                        },{ 
                                timezone: "America/Chicago"      
                        });
                        task_two.start();
                    }
                })
            }) 
    }

    //Command to add the Rookie role to be mentioned for anoucments about riddles
    if(message.content.startsWith(prefix + "join")){
        let role = message.member.guild.roles.cache.find(role => role.name === "[R]Rookie");
        if (role) message.guild.members.cache.get(message.author.id).roles.add(role);
        message.channel.send(`${message.author} *Thank you for joining us for the Riddles. If you have any questions use* **-help**`)
    
    }
    //Command to remove the Rookie role
    if(message.content.startsWith(prefix +"leave")){
        let role = message.member.guild.roles.cache.find(role => role.name === "[R]Rookie");
        if (role) message.guild.members.cache.get(message.author.id).roles.remove(role);
        message.channel.send(`${message.author} *Were sorry to see you leave we hope to see you join again in the future. If you change your mind use* **-join**`)
    }
    //Command for the Random Riddle
    if(command === 'riddle'){
        message.channel.send(`<@&${'837874063467610152'}>`); //Tags everyone with the Rookie role
        var files = fs.readdirSync('random/')   //Goes to random file directory
        let chosen = files[Math.floor(Math.random() * files.length)] //chooses a random .txt file
        var data = fs.readFileSync(chosen.toString()); //saves the contents of the file to = data
        console.log(chosen.toString()) //reads riddle in the console
        message.channel.send(data.toString()); //Reads the contents from the .txt file in chat
        start(); //runs the Start function at the beginning of the code

        //Runs the Halftime code at the beginning of the code at 9pm CST
        const half = cron.schedule('0 0 21 * * *', () =>{
            halftime();
            },{                
                timezone: "America/Chicago"      
        });
        half.start();
        
        //Gives answer of the riddle at 11pm CST
        const answer = cron.schedule('0 0 23 * * *', () =>{
            message.channel.send(`<@&${'837874063467610152'}>`); //mentions everyone with the Rookie role
            var answer = fs.readFileSync("answer/" + chosen.toString()); //Changes original file to directory to answer and finds a .txt file with the same name from the random directory
            message.channel.send(answer.toString()); //Reads contents in chat
            },{                  
                timezone: "America/Chicago"      
        });
        answer.start();

        //Runs thanks command 10 seconds after answer is given so that way it doesnt interupt the answer being given
        const thanks = cron.schedule('10 0 23 * * *', () => {
            client.channels.cache.get('825489770557341696').send("Thank you everyone for your answers!");
            },{  
                
                timezone: "America/Chicago"      
        });
        thanks.start(); 
  
        function dm(){ //Dm's Devin what .txt file was read
            client.users.fetch("683686127428829194", false).then(dm => {
                var answer = fs.readFileSync("answer/" + chosen.toString());
                dm.send("**"+ chosen+"**"+" This was the file read!");
                dm.send("This is the answer ---> " + answer.toString());
            })
        }
       function dmtwo(){ //Dm's Brennen what .txt file was read
            client.users.fetch("766353364933410820", false).then(dm => {
                var answer = fs.readFileSync("answer/" + chosen.toString());
                dm.send("**"+ chosen+"**"+" This was the file read!");
                dm.send("This is the answer ---> " + answer.toString());
            })
        }
        setTimeout(dm, 1000);
        setTimeout(dmtwo, 1000);

    } else if (command == 'dm-all'){ //This will start a Direct Message with who ever has the Rookie role
        let role = message.guild.roles.cache.get('825499310825013308', false).members; //Looks for everyone with the Role
        message.channel.send(`**Everyone with the** <@&${'837874063467610152'}> **have been directly messaged, please put your answers in there starting with --**`) //Sends in server chat to give status of dm's
        role.forEach(member=> {//sends everone with role a direct message  
           member.send('Hey! this is the riddle bot, please start your answer off with **-R> for the Daily Riddle, -O> for the Office Riddle, -P> for the Parks n Rec Riddle**')
        })
          
    } else if (command == 'dm'){ //Whoever executes the command will be sent a direct message from the riddle bot
        message.author.send('Hey! this is the riddle bot, please start your answer off with **-R> for the Daily Riddle, -O> for the Office Riddle, -P> for the Parks n Rec Riddle**')      

    } else if (command == 'theoffice'){ //Command for the Office Riddles
        message.channel.send(`<@&${'837874063467610152'}>`); //Tags everyone with the Rookie role
        var files = fs.readdirSync('TheOffice/')   //Goes to random file directory
        let chosen = files[Math.floor(Math.random() * files.length)] //chooses a random .txt file
        var data = fs.readFileSync(chosen.toString()); //saves the contents of the file to = data
        console.log(chosen.toString()) //reads riddle in the console
        message.channel.send(data.toString()); //Reads the contents from the .txt file in chat
        start(); //runs the Start function at the beginning of the code

        //Runs the Halftime code at the beginning of the code at 9pm CST
        const half = cron.schedule('0 0 21 * * *', () =>{
            halftime();
            },{                
                timezone: "America/Chicago"      
        });
        half.start();
        
        //Gives answer of the riddle at 11pm CST
        const answer = cron.schedule('0 0 23 * * *', () =>{
            message.channel.send(`<@&${'837874063467610152'}>`); //mentions everyone with the Rookie role
            var answer = fs.readFileSync("answer/" + chosen.toString()); //Changes original file to directory to answer and finds a .txt file with the same name from the random directory
            message.channel.send(answer.toString()); //Reads contents in chat
            },{                  
                timezone: "America/Chicago"      
        });
        answer.start();

        //Runs thanks command 10 seconds after answer is given so that way it doesnt interupt the answer being given
        const thanks = cron.schedule('10 0 23 * * *', () => {
            client.channels.cache.get('825489770557341696').send("Thank you everyone for your answers!");
            },{  
                
                timezone: "America/Chicago"      
        });
        thanks.start(); 
  
        function dm(){ //Dm's Devin what .txt file was read
            client.users.fetch("683686127428829194", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
       function dmtwo(){ //Dm's Brennen what .txt file was read
            client.users.fetch("766353364933410820", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
        setTimeout(dm, 1000);
        setTimeout(dmtwo, 1000);

    } else if (command == 'parksnrec'){ //Command for ParksnRec Riddles
        message.channel.send(`<@&${'837874063467610152'}>`); //Tags everyone with the Rookie role
        var files = fs.readdirSync('ParksnRec/')   //Goes to random file directory
        let chosen = files[Math.floor(Math.random() * files.length)] //chooses a random .txt file
        var data = fs.readFileSync(chosen.toString()); //saves the contents of the file to = data
        console.log(chosen.toString()) //reads riddle in the console
        message.channel.send(data.toString()); //Reads the contents from the .txt file in chat
        start(); //runs the Start function at the beginning of the code

        //Runs the Halftime code at the beginning of the code at 9pm CST
        const half = cron.schedule('0 0 21 * * *', () =>{
            halftime();
            },{                
                timezone: "America/Chicago"      
        });
        half.start();
        
        //Gives answer of the riddle at 11pm CST
        const answer = cron.schedule('0 0 23 * * *', () =>{
            message.channel.send(`<@&${'837874063467610152'}>`); //mentions everyone with the Rookie role
            var answer = fs.readFileSync("answer/" + chosen.toString()); //Changes original file to directory to answer and finds a .txt file with the same name from the random directory
            message.channel.send(answer.toString()); //Reads contents in chat
            },{                  
                timezone: "America/Chicago"      
        });
        answer.start();

        //Runs thanks command 10 seconds after answer is given so that way it doesnt interupt the answer being given
        const thanks = cron.schedule('10 0 23 * * *', () => {
            client.channels.cache.get('825489770557341696').send("Thank you everyone for your answers!");
            },{  
                
                timezone: "America/Chicago"      
        });
        thanks.start(); 
  
        function dm(){ //Dm's Devin what .txt file was read
            client.users.fetch("683686127428829194", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
       function dmtwo(){ //Dm's Brennen what .txt file was read
            client.users.fetch("766353364933410820", false).then(dm => {
                dm.send("**"+ chosen+"**"+" This was the file read!");
            })
        }
        setTimeout(dm, 1000);
        setTimeout(dmtwo, 1000);

    } else if (command == 'update'){ //Command to tell you what is new to the Riddle Bot
        message.channel.send(`${message.author}`); //Mentions whoever executes the command
        message.channel.send("*Welcome to Riddle Bot v2, this version has added the feature to Dm the Riddle bot your answer and for it to be given along with the answer later in the day for everyone on the server to see. The feature to Add the riddle role to yourself was also added and you also have the ability to remove it with* **-join** and **-leave**")
        message.channel.send("*There will be more updates to come so please bare with us for now and if you have any suggestions please feel free to contact* " + myid + " *Or if you had any other ideas for other discord bots*")
        message.channel.send("If you would like to see what was added in previous version please use the command **-previous**")
    }
    else if (command == 'previous'){ //Command to tell you what has happened in previous updates
        message.channel.send("Riddle Bot v1.2, this updated version will now give the answer to the riddle at 11pm CT after the **-riddle** command is put in chat. The 11pm CT time limit is to give everyone enough time to submit an answer, there will be a reminder given 2 hours before the answer is given. We want to thank you all for competing, Have Fun!")
    }
    if (message.content.startsWith(prefix + 'help')){ //Help command to give incite on how to navigate and use the Riddle Bot
        message.channel.send("**-join** = This adds the Riddle role so you will be pinged for all of the riddle")
        message.channel.send("**-leave** = This will remove the Riddle role from you and you will no longer be pinged")
        message.channel.send("**-riddle** = This will just give you a random themed riddle")
        message.channel.send("**-theoffice** = This will give you riddles based of the USA version of The Office")
        message.channel.send("**-parksnrec** = (coming soon) but it will be riddles based off of Parks and Recreation")
        message.channel.send("**-dm** = This will start a private message with the riddle bot where you can give your answers to the various riddles")
        message.channel.send("**-update** = This will give you information about what was added in the last update")
        message.channel.send("**-previous** = This command will tell you about all of the previous versions of the riddle bot and what was added in each version")
        message.channel.send("**-R>** = This is a command that is used to dm the Riddle Bot for the Daily Riddle, (for example ***-R>This is my answer to the riddle***) the **-R>** is the intitial command")
        message.channel.send("**-O>** = This is a command that is used to dm the Riddle Bot for the The Office Riddle, (for example ***-O>This is my answer to the riddle***) the **-O>** is the intitial command")
        message.channel.send("**-P>** = This is a command that is used to dm the Riddle Bot for the Parks n Rec Riddle, (for example ***-P>This is my answer to the riddle***) the **-P>** is the intitial command")

        message.channel.send("*If you have anymore question please ask*"+ myid)

    }
});

client.login(''); //Token to connect to discord, can be found at https://discord.com/developers/applications keep your Token private to keep your bot safe