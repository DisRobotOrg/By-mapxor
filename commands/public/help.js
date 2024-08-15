const Discord = require("discord.js");
let prefix = "+"
const db = require("quick.db");
 const language = "en";
module.exports = {
    name: "help",
    cooldown: 5,
    run: async (client, message, args) => {

  
  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
    .setTitle("Helpful Links")
  
    .setDescription(` **[Add To Your Server](https://soon)**

                      **[Dash bord](https://soon)** 

                      **[Support server](https://discord.gg/)** 

Use \`+commands\` to show the bot commands
`)
    .setColor('9e1c36');
       try {
        message.author.send(embed)
        message.react("✅")
         } catch (error) { 
          message.react("❌")
    }}

}

