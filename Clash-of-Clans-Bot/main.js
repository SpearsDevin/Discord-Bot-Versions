
const { Client, GatewayIntentBits } = require('discord.js');
const Discord = require("discord.js");
const { EmbedBuilder } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildWebhooks, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.GuildScheduledEvents] });
const axios = require('axios');
const mongoose = require("mongoose");
const User = require('./schemas/UserSchema')
const Clans = require('./schemas/ClanLinkSchema')


const config = require('./config')
const COC_API_BASE = 'https://api.clashofclans.com/v1'

let WarIds = {}
let Players = {}
const exp = '<:exp:1096569684297519104>'
const trophy = '<:trophy:1096569694279966741>'
const block = "```"
const emojis= [
  " ",
  '<:TH_01:1095699898969636924>',
  '<:TH_02:1095699901876293703>',
  '<:TH_03:1095699902861950998>',
  '<:TH_04:1095699905810550866>',
  '<:TH_05:1096570025382514738>',
  '<:TH_06:1096570027420942336>',
  '<:TH_07:1096570000212508763>',
  '<:TH_08:1096570002716500098>',
  '<:TH_09:1096570004167721002>',
  '<:TH_10:1096570006948552714>',
  '<:TH_11:1096570009125392384>',
  '<:TH_12:1096570011977519204>',
  '<:TH_13:1096570014066286673>',
  '<:TH_14:1096570017811804351>',
  '<:TH_15:1096570022400364621>',
]
let heroes= {
  barb:"<:barbarian_king:1096569618505683005>",
  archer:"<:archer_queen:1096569616051998741>",
  warden:"<:grand_warden:1096569623555620965>",
  royal:"<:royal_champion:1096569612809818154>"
}

const prefix = '!';
client.on('ready', async() => {
  console.log(`Logged in as ${client.user.tag}!`);
  await mongoose.connect('mongodb://localhost:27017/', {
    keepAlive: true,
  })
});


client.on('messageCreate', async (message, Discord) => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (message.content.startsWith('~')) {

      //console.log(message.channel.id)
      const channelIds = await Clans.find({ channel: message.channel.id})
      console.log(channelIds[0].channel)

      try {
        const response = await axios.get(`${COC_API_BASE}/clans/%23${channelIds[0].clan}`, {
          headers: {
            Authorization: `Bearer ${config.coc.apiKey}`
          }
        });
        const clan = response.data;
        //console.log(response.data)

        const Embed = new EmbedBuilder()
        .setColor(0x0099FF)
        .setTitle(clan.name)
        .setAuthor({ name: `${clan.tag}`, iconURL: clan.badgeUrls.large })
        .setDescription(`${clan.description}`)
        .setThumbnail(clan.badgeUrls.large)
        .addFields(
            { name: clan.type, value: ' '},
            { name: `War Info :\n  Streaks: ${block}${clan.warWinStreak}${block} \n  Wins: ${block}${clan.warWins}${block}\n  Losses: ${block}${clan.warLosses}${block}\n  Ties: ${block}${clan.warTies}${block}`, value:` `, inline: true },
            { name: `Members: ${block}${clan.members}${block}/50 \nClan Lvl: ${block}${clan.clanLevel}${block}\nWar League: ${block}${clan.warLeague.name}${block}\nCapital League: ${block}${clan.capitalLeague.name}${block}`, value:` `, inline: true },
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
    if (message.content.startsWith('!set')){
      //console.log(await Clans.find({ channel: message.channel.id}))
      if(await Clans.find({ channel: message.channel.id}) == false){
        try {
          const response = await axios.get(`${COC_API_BASE}/clans/%23${args[0].toUpperCase()}`, {
              headers: {
                Authorization: `Bearer ${config.coc.apiKey}`
          }
          });
          const clan = response.data;
          const newClan = await Clans.create({
            channel: message.channel.id,
            clan: args[0].toUpperCase(),
            clanName: clan.name,
            serverId: message.guild.id,
          });
          const saved = await newClan.save();

          const Embed = new EmbedBuilder()
          .setColor(0x0099FF)
          .setTitle(`Your clan is now set to `+clan.name)
          .setAuthor({ name: clan.tag, iconURL: clan.badgeUrls.large })
          .setTimestamp()
          message.channel.send({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
        }
      }else{
        const channelIds = await Clans.find({ channel: message.channel.id})
        console.log(channelIds[0].clanName)
  
        message.channel.send(`Sorry the ***${channelIds[0].clanName}*** Clan has already been set for this channel, to overwrite please use **!overwrite** or please add a clan to a new channel`)
      }
    }
    if (message.content.startsWith('!link')){
      if(await User.find({ username: message.author.username}) == false){
        try {
            const response = await axios.get(`${COC_API_BASE}/players/%23${args[0].toUpperCase()}`, {
                headers: {
                  Authorization: `Bearer ${config.coc.apiKey}`
            }
            });
            const player = response.data;
            console.log(response.data)
            const thID = emojis[player.townHallLevel].split(":", 3)
            const thID2 = thID[2].split(">", 3)

            const newUser = await User.create({
              username: message.author.username,
              discordId: message.author.id,
              clash: args[0].toUpperCase(),
              clashUser: player.name,
            });
            const savedUser = await newUser.save();

            console.log(player.heroes[0])
            const Embed = new EmbedBuilder()
            .setColor(0x0090FF)
            .setTitle(player.name)
            .setAuthor({ name: player.tag, iconURL: player.league.iconUrls.medium })
            .setDescription(`${exp} ${player.expLevel}     ${trophy} ${player.trophies}\n${player.role} in ${player.clan.name}`)
            .setThumbnail(`https://cdn.discordapp.com/emojis/${thID2[0]}.png?size=128`)
            .addFields(
                { name: "League:", value: player.league.name},
                { name: `Heroes:`, value:` `, inline: true },
                { name: `Donations:\n`, value:` `, inline: false },
                { name: `${heroes.barb}:${block}${player.heroes[0].level}${block}`, value: " ", inline: true },
                { name: `**Received:** ${block}${player.donationsReceived}${block}\n`, value: " ", inline: true },
                { name: `${heroes.archer}: ${block}${player.heroes[1].level}${block}`, value: " ", inline: true },
                { name: `**Given:${block}${player.donations}${block}**\n`, value: " ", inline: true },
                { name: `${heroes.warden}: ${block}${player.heroes[2].level}${block}`, value: " ", inline: true },
                { name: `**Clan Capital:** ${block}${player.clanCapitalContributions}${block}\n`, value: " ", inline: true },
                { name: `${heroes.royal}: ${block}${player.heroes[3].level}${block}`, value: " ", inline: true },
                )
            .setTimestamp()
            message.channel.send({ embeds: [Embed] });
        } catch (error) {
            console.error(error);
        }
      }else{
        const channelIds = await  User.find({ username: message.author.username})
        console.log(channelIds[0].username)
  
        message.channel.send(`Sorry it seems a Clash account has already been set to ***${channelIds[0].username}*** with the name ***${channelIds[0].clashUser}***, to overwrite please use **!newbase**`)
      }
    } 
});

client.login(config.discord.userToken);