
module.exports = {
  name: 'say',
  category: 'Owner',
  aliases: [],
  description: 'gives userinfo',
  args: false,
  usage: '',
  userParams: [],
  botParams: [''],
  owner: true,
  execute(message, args) {
    if (!args.join(" ")) {
      message.channel.send("Please add some text for me to repeat");
    } else {
      message.channel.send(args.join(" "), {
        allowedMentions: { parse: ["users"] },
      });
      message.delete();
    }
  },
};
