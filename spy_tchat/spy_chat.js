const Discord = require("discord.js");
const token = "";
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});
const channelIDEcoute1 = "CHANNEL_ID"; //Channel d'écoute 1
const channelIDEnvoie1 = "CHANNEL_ID"; //channel de surveillance

const channelIDEcoute2 = "CHANNEL_ID"; //Channel d'écoute 2
const channelIDEnvoie2 = "CHANNEL_ID"; //channel de Data

const channelIDEcoute3 = "CHANNEL_ID"; //Channel d'écoute 3
const channelIDEnvoie3 = "CHANNEL_ID"; //channel de surveillance

client.on("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}!`);
});

client.on("messageCreate", async (msg) => {
  if (msg.channel.id === channelIDEcoute1) {
    const channel = client.channels.cache.get(channelIDEnvoie1);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute2) {
    const channel = client.channels.cache.get(channelIDEnvoie2);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute3) {
    const channel = client.channels.cache.get(channelIDEnvoie3);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  }
});

client.login(token);
