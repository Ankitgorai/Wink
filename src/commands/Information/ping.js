const { EmbedBuilder } = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

module.exports = {
  name: "ping",
  category: "Information",
  aliases: ["latency"],
  description: "Displays the bot's ping.",
  args: false,
  usage: "",
  userPerms: [],
  owner: false,
  /**
   *
   * @param {Message} message
   * @param {string[]} args
   * @param {string} prefix
   */
  execute: async (message, args, prefix) => {
    const ping = Date.now() - message.createdTimestamp;
    const api_ping = message.client.ws.ping;
    const uptime = moment.duration(message.client.uptime).format(" D[d], H[h], m[m], s[s]");
    const embed = new EmbedBuilder()
      .setColor(message.client.embedColor)
      .setAuthor({ name: `Pong`, iconURL: message.client.user.displayAvatarURL() })
      .setColor(message.client.embedColor)
      .addFields([{ name: "Bot Latency", value: `\`\`\`ini\n[ ${ping}ms ]\n\`\`\``, inline: true }, 
                  { name: "API Latency", value: `\`\`\`ini\n[ ${api_ping}ms ]\n\`\`\``, inline: true },
                  { name: "Uptime", value: `\`\`\`ini\n[ ${uptime} ]\n\`\`\``, inline: true }])
      .setFooter({ text: `Requested by ${message.author.username}`, iconURL: message.author.displayAvatarURL() })
      .setTimestamp();
      
    message.reply({ embeds: [embed] });
  },
};
