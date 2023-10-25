const { EmbedBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder, ButtonBuilder, ComponentType } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");
module.exports = {
    name: "help",
    category: "Information",
    aliases: [ "h" ],
    description: "Return all commands, or one specific command",
    args: false,
    usage: "",
    permission: [],
    owner: false,
 execute: async (message, args, client, prefix) => {
 let categories = [];
        let cots = [];
        const api_ping = client.ws.ping;
        const duration1 = moment
          .duration(message.client.uptime)
          .format(" d [days], h [hrs], m [mins], s [secs]");
        const about = message.client.emoji.about;
        const infoArr = new Array();
   const musicArr = new Array();
   const plArr = new Array();
   const conrr = new Array();
        let guildsCounts = await client.guilds.fetch();
        let userCounts = client.guilds.cache.reduce(
          (acc, guild) => acc + guild.memberCount,
          0
        );
   
   
        



 const embedFields = [
    {name : `**COMMANDS:**` , value : `
> <:Ankit_Info:1163227434154459316>  \`:\` INFO
> <:Ankit_Music:1163227429779808317>  \`:\` MUSIC
> <:Ankit_Utility:1163227424864075786>  \`:\` MODERATION                    
> <:Ankit_Filter:1163227436348096532>  \`:\` FILTERS
> <:Ankit_Playlist:1163227432275411116>  \`:\` PLAYLIST
> <:Ankit_Setting:1163227427175153674>  \`:\` SETTINGS`},
    {name : `**Stats:**`, value : `**<:Guild_administrator_white_theme:1107183009423183972> Guilds:** ${client.guilds.cache.size}\n**<:Users:1107183287874629703> Users:** ${userCounts}\n**<a:Uptime:1097180758264782848> Uptime:** ${duration1}`}
]
 /*const embed = new EmbedBuilder()
    .setAuthor({ name: 'Astra Music Help', iconURL: 'https://cdn.discordapp.com/guilds/911967423261982790/users/949177412741103697/avatars/b744f38f041fbb9fa9214e7ba705ba23.png?size=4096'})
    .setDescription(`**<:icons:1081476310624374854> Prefix For This Server \`${prefix}\`\n<:icons:1081476310624374854> Type \Total Command: 50 | Usable By You: 48\n<:icons:1081476310624374854> [Vote](https://top.gg/bot/1015957171919388714/vote) | [Support](https://discord.gg/winklebot) | [Invite](https://discord.com/api/oauth2/authorize?client_id=1015957171919388714&permissions=8&scope=bot%20applications.commands) | [Dash](https://winkleop.me/)**`)
   .addFields(embedFields)
   .setThumbnail(client.user.displayAvatarURL())
    .setColor("#2500ff")
    .setTimestamp()
    .setImage("https://share.creavite.co/quBjJ7askNu06QGM.gif")
    .setFooter({text: `Made By Team Astra`, iconURL: message.author.displayAvatarURL({ dynamic: true })})*/
   const embed = new EmbedBuilder()
    .setAuthor({name: `Astra Music Help`, iconURL: client.user.displayAvatarURL({dynamic: true})}) 
  // .setTitle("Winkle Music Help")
   .setThumbnail(client.user.displayAvatarURL())
     .setColor("Blue")
   .setDescription(`**Astra is an advanced Music bot with Beatuiful Music quality.**\n- Use the buttons/select menu Below to get started!\n- Prefix for This server \`${prefix}\`\n`)
   .addFields({ name: '**Categories**', value: `> <:Ankit_Info:1163227434154459316>  \`:\` [Info](https://linktr.ee/ankit.fy)\n> <:Ankit_Music:1163227429779808317>  \`:\` [Music](https://linktr.ee/ankit.fy)\n> <:Ankit_Utility:1163227424864075786>  \`:\` [Moderation](https://linktr.ee/ankit.fy)\n> <:Ankit_Filter:1163227436348096532>  \`:\` [Filters](https://linktr.ee/ankit.fy)\n> <:Ankit_Playlist:1163227432275411116>  \`:\` [Playlist](https://linktr.ee/ankit.fy)\n> <:Ankit_Setting:1163227427175153674>  \`:\` [Settings](https://linktr.ee/ankit.fy)`, inline: true },
              {name: 'Links', value: `[Support Server](https://discord.gg/56XCc22vYK) `});
   client.commands.map((a) => {
     switch(a.category){
       case "Information":
         infoArr.push(`\`${a.name}\``);
       break;
       case "Music":
         musicArr.push(`\`${a.name}\``)
       break;
       case "Playlist":
         plArr.push(`\`${a.name}\``);
       break;
       case "Config":
         conrr.push(`\`${a.name}\``);
       break;
     }
   })
   const cmdList = new EmbedBuilder()
   .setAuthor({ name: "Astra Music Help", iconURL: client.user.displayAvatarURL({ dynamic: true }) })
     .setThumbnail(client.user.displayAvatarURL())
   .setDescription(`**Information Commands:**\n ${infoArr.join(" , ")}\n**Music Commands:**\n ${musicArr.join(" , ")}\n**Playlist Commands:**\n${plArr.join(" , ")}\n**Config:**\n${conrr.join(" , ")}`)
   .setColor("Blue")

// cmd list emoji = 
   // home = 
   
    const buttons = {
        home: new ButtonBuilder()
        .setLabel("Home")
        .setEmoji("1134540394294677516")
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("helpcmd-home"),
        list: new ButtonBuilder()
        .setLabel("Commands List")
        .setEmoji("1134540425168945226")
        .setStyle(ButtonStyle.Secondary)
        .setCustomId("helpcmd-list")
    }
   buttons.home.setDisabled(true);
    const row = new ActionRowBuilder()
        .addComponents(
          buttons.home,
          buttons.list
        )

   const row2 = new ActionRowBuilder()
        .addComponents(
            new StringSelectMenuBuilder()
                .setCustomId('helpop')
                .setPlaceholder('Choose The Module.')
                .addOptions([
                {
                    label: 'INFO',
                    
                    value: 'first',
                  emoji: '<:info:1083754618988810380>'
                },
                  {
                    label: 'MUSIC',

                    value: 'second',
                    emoji:
                      '<:music:1083754645173846036>'
                  },
                {
                    label: 'FILTERS',
                    
                    value: 'third',
                    emoji: '<:icons_play:1083754784433127464>'
                    
                },
                                                {
                    label: 'MODERATION',
                    
                    value: 'sixth',
                    emoji: '<:Moderation:1099333601545437205>'
                },
                {
                    label: 'SETTINGS',
                    value: 'fourth',
                   emoji: '<:Icons_utility:1083754845070180424>'                },
                {
                    label: 'PLAYLIST',
                    
                    value: 'fifth',
       emoji: '<:fileicon:1083754718658039838>'                }, 
            ])
        )
   if (!args[0]){     
    const msg = await message.channel.send({ embeds: [embed], components: [row, row2] });
    const collector = msg.createMessageComponentCollector({ componentType: ComponentType.Button , time: 180e+2 });

collector.on('collect', async i => {
	try{
    const cid = i.customId;
  switch(cid){
    case "helpcmd-home": {
      buttons.list.setDisabled(false);
      buttons.home.setDisabled(true);
      msg.edit({ embeds: [embed], components: [row, row2] });
      await i.deferUpdate().catch(() => {});
    } break;
    case "helpcmd-list": {
      buttons.list.setDisabled(true);
      buttons.home.setDisabled(false);
      msg.edit({ embeds: [cmdList], components: [row, row2] });
      await i.deferUpdate().catch(() => {}); // catch for promise rejection cases
    } break;
                          }
  } catch (err){
    console.log(err)
  }
});
        }

   }
 }  
