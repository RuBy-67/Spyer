const Discord = require("discord.js");
const token = "";
const client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Récupère le serveur spécifique
  const guild = client.guilds.cache.get("955160706762813550");
  if (!guild) return console.log("Guild not found!");
  // Récupère tous les salons du serveur
  const channels = guild.channels.cache;

  // Parcours tous les salons et affiche leur nom et ID
  channels.forEach((channels) => {
    console.log(`${channels.name} : (${channels.id})`);
  });
});

client.login(token);
