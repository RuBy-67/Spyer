const Discord = require("discord.js");
const token =
  "";
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});
const channelIDEcoute1 = "955160709229076591"; //Channel d'écoute R4
const channelIDEnvoie1 = "1079820711713050734"; //channel de surveillance

const channelIDEcoute2 = "955160708159520818"; //Channel d'écoute Data
const channelIDEnvoie2 = "1079821101598773248"; //channel de Data

const channelIDEcoute3 = "983512652653404191"; //Channel d'écoute diplo
const channelIDEnvoie3 = "1079821381623103628"; //channel de surveillance

const channelIDEcoute4 = "955160707672993869"; //Channel d'écoute best chat (king)
const channelIDEnvoie4 = "1079821465857310882"; //channel de surveillance

const channelIDEcoute5 = "955160709229076590"; //Channel d'écoute leadership announce
const channelIDEnvoie5 = "1079821546090147991"; //channel de surveillance

const channelIDEcoute6 = "955160708599918703"; //Channel d'écoute punishement
const channelIDEnvoie6 = "1079821580680568842"; //channel de surveillance

const channelIDEcoute7 = "979614582580596756"; //Channel d'écoute king no mods
const channelIDEnvoie7 = "1079821639337910396"; //channel de surveillance

const channelIDEcoute8 = "976097912624910356"; //Channel d'écoute private
const channelIDEnvoie8 = "1079821706937516113"; //channel de surveillance

const channelIDEcoute9 = "955160710076334095"; 
const channelIDEnvoie9 = "1079821465857310882"; //channel de surveillance

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
  } else if (msg.channel.id === channelIDEcoute4) {
    const channel = client.channels.cache.get(channelIDEnvoie4);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute5) {
    const channel = client.channels.cache.get(channelIDEnvoie5);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute6) {
    const channel = client.channels.cache.get(channelIDEnvoie6);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute7) {
    const channel = client.channels.cache.get(channelIDEnvoie7);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute8) {
    const channel = client.channels.cache.get(channelIDEnvoie8);
    // Vérifie si le message contient des images
    if (msg.attachments.size > 0) {
      const attachment = msg.attachments.first(); // récupère la première image attachée
      channel.send("**" + msg.author.username + "** : " + attachment.url); // envoie l'image sur le canal de destination
    } else {
      channel.send("**" + msg.author.username + "** : " + msg.content); // si le message ne contient pas d'image, envoie le contenu du message sur le canal de destination
    }
  } else if (msg.channel.id === channelIDEcoute9) {
    const channel = client.channels.cache.get(channelIDEnvoie9);
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
