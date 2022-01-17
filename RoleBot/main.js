const { channel } = require('diagnostics_channel');
const { Client, Intents } = require('discord.js');
const Discord = require('discord.js');

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", 'DIRECT_MESSAGES', 'GUILD_MEMBERS', 'GUILD_MESSAGE_REACTIONS', 'DIRECT_MESSAGE_REACTIONS']}, {partials: ["MESSAGE", "CHANNEL", "REACTION"] })
const prefix = '!';

var fs = require('fs');

client.commands = new Discord.Collection();

const { Chillin } = require('./config.json')

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Role Bot is Online!');
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', async (member, guildMember) => {
    const channel = member.guild.channels.cache.get('931633556030128262');
    member.roles.add(Chillin);
    if (!channel) return;
    const welcomeEmbed = new Discord.MessageEmbed()
    welcomeEmbed.setColor('#55FFFF')
    welcomeEmbed.setDescription('**' + member.user.username + '** Welcome to the server!!\n Please view '+ `<#932403293534183494>`+ " to assign the roles that best suit your skills or interests😁")
    channel.send({embeds: [welcomeEmbed]})

    client.users.fetch(member.id, false).then(async dm => {
        const Embed = new Discord.MessageEmbed()
        Embed.setColor('#55FFFF')
        Embed.setDescription('**' + member.user.username + '** Welcome to the server!! Glad you were able to join!\n We just have a coule rules,\n 1. Be nice to others \n 2. Keep things appropriate (Just think about things before you send them)\n 3. Drinking lots of coffee helps with your programming(the most important one)\nThank you, Devin or (-R3lease-)\n\nIf you select a role on the **role channel** it will add it to your profile if you deselect the reaction it will remove it from your profile')

        dm.send({embeds: [Embed]})

    }) 
});

client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if(command === 'role'){
        client.commands.get('test').execute(message, args, Discord, client);
    }
});

client.login('');
