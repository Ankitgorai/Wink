const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
  name: "invite",
  category: "Information",
  aliases: ["addme"],
  description: "Get the bot's invite link.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  execute: async (message, args, client, prefix) => {

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setLabel("Invite")
          .setStyle(ButtonStyle.Link)
          .setURL(`https://discord.com/api/oauth2/authorize?client_id=1162722501290369095&permissions=8&scope=bot`),
        
        new ButtonBuilder()
          .setLabel("Support")
          .setStyle(ButtonStyle.Link)
          .setURL("https://discord.gg/bXTfFNGgmm")
      );

    const mainPage = new EmbedBuilder()
      .setAuthor({ name: 'Astra Music', iconURL: 'https://cdn.discordapp.com/guilds/911967423261982790/users/949177412741103697/avatars/b744f38f041fbb9fa9214e7ba705ba23.png?size=4096' })
      .setThumbnail('https://media.tenor.com/D5W9K_bAGbIAAAAC/cute-music.gif')
      .setColor(0x303236)
      .setTimestamp()
      .addFields([{ name: 'Invite Astra music', value: '**[Astra](https://discord.com/api/oauth2/authorize?client_id=1162722501290369095&permissions=8&scope=bot)**', inline: true },
    { name: 'Need Help', value: `**[Support Server](https://discord.gg/bXTfFNGgmm)**`, inline: true },
                  ]);
    message.reply({ embeds: [mainPage], components: [row] })
  }
}
