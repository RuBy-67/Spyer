const Discord = require("discord.js");
const token = "";
const NB = 25; ///Choix nb de message a recolter ICI 25 MAX 100 OU 200.
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});

const channelIDEcoute1 = "CHANNEL_ID"; //Channel d'écoute 1
const channelIDEnvoie1 = "CHANNEL_ID"; //channel de surveillance 1

const channelIDEcoute2 = "CHANNEL_ID"; //Channel d'écoute 2
const channelIDEnvoie2 = "CHANNEL_ID"; //channel de surveillance 2

const channelIDEcoute3 = "CHANNEL_ID"; //Channel d'écoute 3
const channelIDEnvoie3 = "CHANNEL_ID"; //channel de surveillance 3

client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on("messageCreate", async (message) => {
  if (message.channel.id === channelIDEcoute1) {
    const messages = await message.channel.messages.fetch({ limit: NB });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie1);
      if (channel) {
        channel.send(msg.author.username + ": " + msg.content);
      }
    });
  } else if (message.channel.id === channelIDEcoute2) {
    const messages = await message.channel.messages.fetch({ limit: NB });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie2);
      if (channel) {
        channel.send(msg.author.username + ": " + msg.content);
      }
    });
  } else if (message.channel.id === channelIDEcoute3) {
    const messages = await message.channel.messages.fetch({ limit: NB });
    messages.forEach((msg) => {
      const channel = client.channels.cache.get(channelIDEnvoie3);
      if (channel) {
        channel.send(msg.author.username + ": " + msg.content);
      }
    });
  }
});

client.login(token);
