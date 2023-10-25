const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, ButtonStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ComponentType } = require("discord.js");

module.exports = {
    name: "about",
    category: "Information",
    aliases: ["botinfo", "info"],
    description: "See information about this project.",
    args: false,
    usage: "",

    userPerms: [],
    owner: false,
    voteonly: false,

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
                .setURL("https://discord.gg/aP8x949r9e") // make new account or mail to discord
            ); // skyopg       send hi to me   sended you request accept it. give your id to me 1119420130112315452 send me hi pls i got captcha
        const opt = [
            new StringSelectMenuOptionBuilder() 
            .setLabel("Developers")
            .setDescription("A list of the developers of the Astra Music project")
            .setValue("devs")
            .setEmoji("🧑‍💻"),
            new StringSelectMenuOptionBuilder() 
            .setLabel("Support")
            .setDescription("People with enough experience with the bot, can help with using the bot")
            .setValue("sups")
            .setEmoji("🔗"),
            new StringSelectMenuOptionBuilder() 
            .setLabel("Developers")
            .setDescription("A list of the developers of the Astra project")
            .setValue("devs")
            .setDefault(true)
            .setEmoji("🧑‍💻"),
            new StringSelectMenuOptionBuilder() 
            .setLabel("Support")
            .setDescription("People with enough experience with the bot, can help with using the bot")
            .setValue("sups")
            .setDefault(true)
            .setEmoji("🔗")
        ];
        const smenu = new StringSelectMenuBuilder()
        .setCustomId("actionRow")
        .setPlaceholder("Select One...")
        .addOptions(
          opt[0],
          opt[1]
        )
        const smenu2 = new StringSelectMenuBuilder()
        .setCustomId("actionRow")
        .setPlaceholder("Select One...")
        .addOptions(opt[2], opt[1]);
        const smenu3 = new StringSelectMenuBuilder()
        .setCustomId("actionRow")
        .setPlaceholder("Select One...")
        .addOptions(opt[0], opt[3])
        
        const Menu = new ActionRowBuilder()
        .addComponents(smenu)
        const Menu2 = new ActionRowBuilder()
        .addComponents(smenu2)
        const Menu3 = new ActionRowBuilder()
        .addComponents(smenu3)
      
        const mainPage = new EmbedBuilder()
            .setAuthor({ name: 'Astra Music', iconURL: client.user.displayAvatarURL({ dynamic: true })})
 .setThumbnail('https://media.tenor.com/D5W9K_bAGbIAAAAC/cute-music.gif')
            .setDescription(`**Astra is an advanced Music bot with best reconnection and Beatuiful Music quality.**\n- Hey! Its Astra an Advanced Music bot! Join support server  for more !\n> [Support](https://discord.gg/bXTfFNGgmm)`)
            .setColor(client.embedColor)
            .setFooter({  text: `Created With 💗 by Ash !`, iconURL: client.user.displayAvatarURL({ dynamic: true })})

            const msg = await message.channel.send({ embeds: [mainPage], components: [row ,Menu] });

          const collector = await msg.createMessageComponentCollector({ componentType: ComponentType.StringSelectMenu, time: 180e2 })

          collector.on("collect", async i => {
            const cid = i.customId;
            const options = i.values;
            switch(cid){
              case "actionRow": {
                switch(options[0]){
                  case "devs": {
                    const dev = new EmbedBuilder()
                    .setAuthor({ name: 'Astra Music', iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setFooter({  text: `Created With 💗 by Ash !`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setThumbnail('https://media.tenor.com/D5W9K_bAGbIAAAAC/cute-music.gif')
                    .setDescription(`Hey, Here are my Developers Below:\n> [ Ash ! ](https://discord.com/users/949177412741103697) `)
                    .setColor(client.embedColor)
                    Menu.components[0].options[0].setDefault(true)
                    Menu.components[0].options[1].setDefault(false)

                    await msg.edit({ embeds: [dev], compoenents: [row, Menu] })
                    await i.deferUpdate().catch(()=>{})
                  } break;
                  case "sups": {
                    const sup = new EmbedBuilder()
                    .setAuthor({ name: 'Astra Music', iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setFooter({  text: `Created With 💗 by ! Ash 🤍`, iconURL: client.user.displayAvatarURL({ dynamic: true })})
                    .setThumbnail('https://media.tenor.com/D5W9K_bAGbIAAAAC/cute-music.gif')
                    .setDescription(`Coming soon!`).setColor(client.embedColor)

                    Menu.components[0].options[0].setDefault(false)
                    Menu.components[0].options[1].setDefault(true)
                  
                    await msg.edit({ embeds: [sup], compoenents: [row, Menu] });
                    await i.deferUpdate().catch(()=>{}) // promise resolve ok
                  } break;
                }
              }
            }
          }) 
    }
}