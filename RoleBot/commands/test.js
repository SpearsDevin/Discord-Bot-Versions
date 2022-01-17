module.exports = {
    name: 'test',
    description: 'Sets up role for users',
    async execute(message, args, Discord, client) {
        const { JavascriptEmoji } = require('../config.json');
        const { JavaRole } = require('../config.json')
        const { JavaEmoji } = require('../config.json')
        const { JavascriptRole } = require('../config.json')
        const { channel } = require('../config.json')
        const{ReactRole} = require('../config.json')
        const{ReactEmoji} = require('../config.json')
        const{CSharpRole} = require('../config.json')
        const{CSharpEmoji} = require('../config.json')
        const{CPlusRole} = require('../config.json')
        const{CPlusEmoji} = require('../config.json')
        const{PythonRole} = require('../config.json')
        const{PythonEmoji} = require('../config.json')
        const{WebDevRole} = require('../config.json')
        const{WebDevEmoji} = require('../config.json')
        const{VideoEditingRole} = require('../config.json')
        const{VideoEditingEmoji} = require('../config.json')
        const{GameDesignRole} = require('../config.json')
        const{GameDesignEmoji} = require('../config.json')
        

        const Embed = new Discord.MessageEmbed()
            .setColor("#55FFFF")
            .setTitle('Choose a role:')
            .setDescription(`:white_large_square: Javascript/Node.js\n\n
            :orange_square: Java\n\n
            :blue_square: React\n\n
            :purple_square: C#\n\n
            :red_square: C++\n\n
            :green_square: Python\n\n
            :yellow_square: Web-Dev\n\n
            :brown_square: Video Editing\n\n
            :black_large_square: Game Design`)

        let messageEmbed = await message.channel.send({embeds: [Embed]});
        messageEmbed.react(JavascriptEmoji);
        messageEmbed.react(JavaEmoji);
        messageEmbed.react(ReactEmoji);
        messageEmbed.react(CSharpEmoji);
        messageEmbed.react(CPlusEmoji);
        messageEmbed.react(PythonEmoji);
        messageEmbed.react(WebDevEmoji);
        messageEmbed.react(VideoEditingEmoji);
        messageEmbed.react(GameDesignEmoji);


        client.on("messageReactionAdd", async(reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id == channel) {               
                if (reaction.emoji.name === JavascriptEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(JavascriptRole);
                    console.log('Javascript role added');
                }
                if (reaction.emoji.name === JavaEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(JavaRole);
                    console.log('Java role added');
                }
                if (reaction.emoji.name === ReactEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(ReactRole);
                    console.log('React role added');
                }
                if (reaction.emoji.name === CSharpEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(CSharpRole);
                    console.log('C# role added');
                }
                if (reaction.emoji.name === CPlusEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(CPlusRole);
                    console.log('C++ role added');
                }
                if (reaction.emoji.name === PythonEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(PythonRole);
                    console.log('Python role added');
                }
                if (reaction.emoji.name === WebDevEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(WebDevRole);
                    console.log('WebDev role added');
                }
                if (reaction.emoji.name === VideoEditingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(VideoEditingRole);
                    console.log('Video Editing role added');
                }
                if (reaction.emoji.name === GameDesignEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GameDesignRole);
                    console.log('Game Design role added');
                }
            } else {
                return;
            }
        });
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === JavascriptEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(JavascriptRole);
                    console.log('Javascript role removed');
                }
                if (reaction.emoji.name === JavaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(JavaRole);
                    console.log('Java role removed')
                }
                if (reaction.emoji.name === ReactEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(ReactRole);
                    console.log('React role removed');
                }
                if (reaction.emoji.name === CSharpEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CSharpRole);
                    console.log('C# role removed');
                }
                if (reaction.emoji.name === CPlusEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(CPlusRole);
                    console.log('C++ role removed');
                }
                if (reaction.emoji.name === PythonEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(PythonRole);
                    console.log('Python role removed');
                }
                if (reaction.emoji.name === WebDevEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(WebDevRole);
                    console.log('WebDev role removed');
                }
                if (reaction.emoji.name === VideoEditingEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(VideoEditingRole);
                    console.log('Video Editing role removed');
                }
                if (reaction.emoji.name === GameDesignEmoji){
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GameDesignRole);
                    console.log('Game Design role removed');
                }
            } else {
                return;
            }
        });
    }   
}