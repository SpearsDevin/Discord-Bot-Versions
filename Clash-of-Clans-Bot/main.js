
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildScheduledEvents] });
const axios = require('axios');

const config = require('./config')
const COC_API_BASE = 'https://api.clashofclans.com/v1'

let Clans = {}
let WarIds = {}
let Players = {}
const prefix = '!';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', async (message, Discord) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith('~')) {
      try {
        const response = await axios.get(`${COC_API_BASE}/clans/%23${config.clans[0].tag}`, {
          headers: {
            Authorization: `Bearer ${config.coc.apiKey}`
          }
        });
        const clan = response.data;
        console.log(response.data)
        const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(clan.name)
        .setAuthor({ name: 'Clash Of Clans', iconURL: clan.badgeUrls.large })
        .setDescription(`Tag: ${clan.tag}`)
        .setThumbnail(clan.badgeUrls.large)
        .addFields(
            { name: "Status:", value: clan.type},
            { name: "description:", value: clan.description},
            { name: '\u200B', value: '\u200B' },
            { name: 'War Info', value:`War League: ${clan.warLeague.name} \n War Streaks: ${clan.warWinStreak} \nWar Wins: ${clan.warWins}\nWar Losses: ${clan.warLosses}\nWar Ties: ${clan.warTies}`, inline: true },
            { name: 'members: ', value:`${clan.members}}`, inline: true },
        )
        .setTimestamp()
    
        message.channel.send({ embeds: [Embed] });
      } catch (error) {
        console.error(error);
      }
     
    }    
    if (message.content.startsWith('!clan')){
        try {
            const response = await axios.get(`${COC_API_BASE}/clans/%23${args[0].toUpperCase()}`, {
                headers: {
                  Authorization: `Bearer ${config.coc.apiKey}`
            }
            });
            const clan = response.data;
            console.log(response.data)
            const Embed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setTitle(clan.name)
            .setAuthor({ name: 'Clash Of Clans', iconURL: clan.badgeUrls.large })
            .setDescription(`Tag: ${clan.tag}`)
            .setThumbnail(clan.badgeUrls.large)
            .addFields(
                { name: "Status:", value: clan.type},
                { name: "description:", value: clan.description},
                { name: '\u200B', value: '\u200B' },
                { name: 'War Info', value:`War League: ${clan.warLeague.name} \n War Streaks: ${clan.warWinStreak} \nWar Wins: ${clan.warWins}\nWar Losses: ${clan.warLosses}\nWar Ties: ${clan.warTies}`, inline: true },
                { name: 'Members: ', value:`${clan.members}/50`, inline: true },
            )
            .setTimestamp()
        
            message.channel.send({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
        }
    }
});

client.login(config.discord.userToken);
