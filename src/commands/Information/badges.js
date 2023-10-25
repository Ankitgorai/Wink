const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "badges",
  category: "info",
  aliases: ["badge", "profile", "achievement", "pr"],
  cooldown: 5,
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  run: async (client, message, args, guildData, player, prefix) => {
    
      const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      
      const Ash = user.id === "949177412741103697" ? true : false;
      let badges = "";
        const Kei = user.id === "918543740665217094" ? true : false;
      let badgess = "";
    
     const guild = await client.guilds.fetch("911967423261982790"); 

      const sus = await guild.members.fetch(user.id).catch((e) => {
        
      if(user) badges = badges;
      else badges = "`No Badge Available`";
      });
      if(Ash === true || user.id === "949177412741103697") badges = badges + `\n<:Shubh_xD:1081548521242636369>・**! Ash 🤍**`;
    if(Kei === true || user.id === "982856398847242242") badges = badgess + `\n<a:developer:1025670347992879166>・**Developer**`;
try{
      
const fyp = sus.roles.cache.has("1025660329042116618");
      if(fyp === true) badges = badges + `\n<:CoDeveloper:1025670982612041728>・**Co Developer**`;
   //  const pr = sus.roles.cache.has("959392690863210496");
    //  if(fr === true) badges = badges + `\n:teddy_friend: Friends`;
   //   const help = sus.roles.cache.has("948131708950159370");
   //   if(help === true) badges = badges + `\n:xeta_helper: Helper | Developer`;
const own = sus.roles.cache.has("1025660295424770169");
      if(own === true) badges = badges+`\n<:owner:1025670751921131590>・**Owner**`;
     // const bpart = sus.roles.cache.has("959093515781034016");
   //   if(bpart === true) badges = badges + `\n:xeta_partner: Partner`;
    //  const spons = sus.roles.cache.has("948131710279778336");
   //   if(spons === true) badges = badges + `\n:xeta_sponsor: Sponsor`;

      const han = sus.roles.cache.has("1025660382888611870");
      if(han === true) badges = badges + `\n<:Admin:1025671302838747136>・**Admin**`;

    //  const gbug = sus.roles.cache.has("959094254901280769");
  //if(gbug === true) badges = badges + `\n:xeta_hunter_gold: Bug Hunter Prime`;

      const manager = sus.roles.cache.has("1025660427587309618");
      if(manager === true) badges = badges + `\n<:stolen_emoji:1023989834282434600>・**Mod**`;

     const aman = sus.roles.cache.has("1025660454682513459");
      if(aman === true) badges = badges + `\n<:SupportTeam:1025671663720865822>・**Support Team**`;

      const hundi = sus.roles.cache.has("1025660526707089479");
      if(hundi === true) badges = badges + `\n<:Bug_Hunter_level2:1025671771174744084>・**Bug Hunter**`;

      const supp = sus.roles.cache.has("1025660491101642792");
      if(supp === true) badges = badges + `\n<:EarlySupporter:1025671922966614036>・**Supporter**`;

      const fr = sus.roles.cache.has("1025660568448802816");
      if(fr === true) badges = badges + `\n<a:skye_wl_module:1025021947144314960>・**Friends**`;



}catch(err){
if(badges) {
badges = "";
badges = badges;
}
else if(badges === "") badges = "`**You don't have any badges.                          Join our [Support Server](https://discord.gg/8ggjwjahhx) to get some of the badges.**`";
}


      const pr = new MessageEmbed()
.setAuthor(`Profile For ${user.username}#${user.discriminator}`, client.user.displayAvatarURL({dynamic: true})) 
.setThumbnail(user.displayAvatarURL({dynamic: true}))
//.setTitle(`${user.username}'s Profile`)
.setColor(client.color)
.setTimestamp()
.setDescription(`
**_BADGES_** <a:Boost_badges:1025675657625223268>
${badges ? badges : "`No Badge Available`"}`)
//.setTimestamp();
      message.channel.send({embeds: [pr]});
      
    }
  };