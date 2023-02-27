const Discord = require("discord.js");
const token = "";
const client = new Discord.Client({
  intents: [
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  // Récupère tous les serveurs où le bot est membre
  const guilds = client.guilds.cache.map((guild) => {
    return {
      id: guild.id,
      name: guild.name,
    };
  });

  // Affiche les identifiants et les noms de tous les serveurs
  guilds.forEach((guild) => {
    console.log(`Serveur: ${guild.name} (ID: ${guild.id})`);
  });
});
client.login(token);
