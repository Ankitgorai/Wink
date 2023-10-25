const { EmbedBuilder, CommandInteraction, ButtonStyle, Client, ButtonBuilder, ActionRowBuilder } = require("discord.js")

module.exports = {
    name: "invite",
    description: "Get the bot's invite link.",

    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: false
        });

           
    const row = new ActionRowBuilder()
    .addComponents(
    new ButtonBuilder()
    .setLabel("Invite")
    .setStyle(ButtonStyle.Link)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=1162722501290369095&permissions=8&scope=bot`),
      
    new ButtonBuilder()
    .setLabel("Support")
    .setStyle(ButtonStyle.Link)
    .setURL("https://discord.gg/aP8x949r9e")
			);

          const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Astra Music', iconURL: 'https://images-ext-1.discordapp.net/external/WlVoP8UCt3e4HuG73LRvBTPZ96iyoRNB-JqDLICTdFQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1162722501290369095/138ae363e9bbd600960f76790c718610.png?width=402&height=402'})
            .setThumbnail('https://media.discordapp.net/attachments/1065353571090055302/1067471246121500802/f01ef3a2be8442bac0f3f836b6403112.webp')
            .setColor(0x303236)
             .addFields([{ name: 'invite Astra Music', value: `[Astra Music](https://discord.com/api/oauth2/authorize?client_id=1162722501290369095&permissions=8&scope=bot)`}])
             await interaction.followUp({embeds: [mainPage], components: [row]})
    }
}
