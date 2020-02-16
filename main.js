const Discord = require("discord.js");
const { TOKEN, PREFIX } = require("./config");
const client = new Discord.Client({ disableEveryone: true});

client.on("ready", () => {
  client.user.setStatus("dnd");
  client.user.setActivity("B!help | V4.0");
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {

if(msg.content.startsWith(`${PREFIX}logout`)){
  if(msg.author.id === "599564487703658516" || msg.author.id === "365581839907291139"){
    msg.reply("Arrêt en cour");
      console.log("/ Je suis désormais offline / ");
      client.destroy();
      process.exit();
    } else {
      msg.channel.send("**Erreur** ! Tu n'es pas l'owner");
    }
}

});

client.login(TOKEN);
