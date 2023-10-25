const { EmbedBuilder, CommandInteraction, Client, ActionRowBuilder, ButtonBuilder, ButtonStyle, ApplicationCommandType } = require("discord.js")

module.exports = {
    name: "about",
    description: "See information about this project.",
    type: ApplicationCommandType.ChatInput,
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     */

    run: async (client, interaction) => {
        await interaction.deferReply({
            ephemeral: true
        });
        
        const button = new ButtonBuilder()
            .setLabel("Invite")
            .setStyle(ButtonStyle.Link)
            .setURL(`https://discord.com/api/oauth2/authorize?client_id=1162722501290369095&permissions=8&scope=bot`)

      const button2 = new ButtonBuilder()
            .setLabel("Support")
            .setStyle(ButtonStyle.Link)
            .setURL("https://discord.gg/aP8x949r9e");

        const row = new ActionRowBuilder().addComponents(button, button2);

        const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Y Music', iconURL: 'https://images-ext-1.discordapp.net/external/WlVoP8UCt3e4HuG73LRvBTPZ96iyoRNB-JqDLICTdFQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/1162722501290369095/138ae363e9bbd600960f76790c7186.png?width=402&height=402'})
            .setThumbnail('https://media.discordapp.net/attachments/1013894107707478106/1067494881628536902/f01ef3a2be8442bac0f3f836b6403112.webp')
            .setDescription(`**Y Music is an Advanced Music bot with Quality Music and Slash Commands with much more features**`)
        .setColor(client.embedColor)
        .setFooter({text: `Developed With ❤️ By " ! Ash 🤍 `, iconURL: interaction.member.displayAvatarURL({dynmaic: true})})            .addFields([{ name: 'Developer <a:Developer:949177412741103697>', value: '**[" ! Ash 🤍"](https://discord.com/users/949177412741103697)**', inline: true },
            
                { name: 'Early Supporters <a:early_supporter:1067873394231627867>', value: `**[~ Badshah_xD ⁶⁹ ✨🖤#0143](https://discord.com/users/1019968348257267712)** | **[Nҽzzყ#6969](https://discord.com/users/635207912335343630)** | **[ᴹᵂ〢OZUMA xD#2008](https://discord.com/users/1029065620878282792)**
                `, inline: true },
            ]);
        await interaction.followUp({ embeds: [mainPage], components: [row] });
    }
}
