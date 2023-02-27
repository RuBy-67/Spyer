const Discord = require("discord.js");
const token = "";
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});

const channelIDEcoute2 = "1017747507863896106"; //Channel d'écoute buisness
const channelIDEnvoie2 = "1076620016499306596"; //channel de surveillance

const channelIDEcoute4 = "955160707672993869"; //Channel d'écoute best chat (king)
const channelIDEnvoie4 = "1076619621697859694"; //channel de surveillance

const channelIDEcoute6 = "955160708599918703"; //Channel d'écoute punishement
const channelIDEnvoie6 = "1076619879538507907"; //channel de surveillance

const channelIDEcoute7 = "979614582580596756"; //Channel d'écoute king no mods
const channelIDEnvoie7 = "1076619621697859694"; //channel de surveillance

const channelIDEcoute8 = "976097912624910356"; //Channel d'écoute private ?
const channelIDEnvoie8 = "1076619945791729795"; //channel de surveillance

client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.channel.id === channelIDEcoute2) {
    const messages = await message.channel.messages.fetch({ limit: 50 });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie2);
      if (channel) {
        channel.send(
          "__Channel Name:__** " +
            channel.name +
            "**\n" +
            msg.author.username +
            ": " +
            msg.content
        );
      }
    });
  } else if (message.channel.id === channelIDEcoute4) {
    const messages = await message.channel.messages.fetch({ limit: 50 });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie4);
      if (channel) {
        channel.send(
          "__Channel Name:__** " +
            channel.name +
            "**\n" +
            msg.author.username +
            ": " +
            msg.content
        );
      }
    });
  } else if (message.channel.id === channelIDEcoute6) {
    const messages = await message.channel.messages.fetch({ limit: 50 });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie6);
      if (channel) {
        channel.send(
          "__Channel Name:__** " +
            channel.name +
            "**\n" +
            msg.author.username +
            ": " +
            msg.content
        );
      }
    });
  } else if (message.channel.id === channelIDEcoute7) {
    const messages = await message.channel.messages.fetch({ limit: 50 });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie7);
      if (channel) {
        channel.send(
          "__Channel Name:__** " +
            channel.name +
            "**\n" +
            msg.author.username +
            ": " +
            msg.content
        );
      }
    });
  } else if (message.channel.id === channelIDEcoute8) {
    const messages = await message.channel.messages.fetch({ limit: 50 });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie8);
      if (channel) {
        channel.send(
          "__Channel Name:__** " +
            channel.name +
            "**\n" +
            msg.author.username +
            ": " +
            msg.content
        );
      }
    });
  }
});

client.login(token);
