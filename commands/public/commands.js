
const Discord = require("discord.js");
const db = require("quick.db")
const language = "en"
module.exports = {
    name: "commands",
    description: "close all ticket in server",
    cooldown: 5,
    run: async (client, message, args) => {
 


  const embed = new Discord.MessageEmbed()
  .setAuthor(`${message.author.username}`, `${message.author.avatarURL({dynamic:true})}`)
  .setDescription(`

-❯ **PUBLIC COMMANDS**

\`avatar\`, \`corona\`, \`help\`, \`short\`,
\`translate\`, \`user\`, \`ping\`, \`server\`,
  \`bot\`, \`ravatar\`
 ------------------------------------------------------ 
-❯ **MODERATION COMMANDS**

\`addemoji\`, \`aliase\`, \`ban\`, \`clear\`, \`embed\`, 
\`hide\`, \`kick\`, \`lock\`, \`mute\`, \`role\`,
\`setlang\`, \`setprefix\`, \`toogle\`, \`unhide\`, 
\`unlock\`, \`unmute\`, \`vkick\`, \`moveroles\`,
\`transferroles\`, \`roles\` 
 ------------------------------------------------------ 
-❯ **PROTECTION COMMANDS**

\`settings\`, \`antispam\`, \`whitelist-add\`, 
\`whitelist-delete\`, \`whitelist\`
  ----------------------------------------------------- 
-❯ **TICKET COMMANDS**
 
\`tr\`, \`add\`, \`remove\`, \`new\`, \`rename\`,
\`close\`, \`close-all\`, \`ticket-role\`,
\`ticket-number\`, \`ticket-toggle\`,
\`ticket-description\`, \`ticket-config\`,
\`ticket-category\`
  ------------------------------------------------------
-❯ **FUN COMMANDS**

\`aki\`, \`emoji\`, \`fakebot\`,\`hug\`, \`kill\`,
\`kiss\`, \`kt\`, \`slap\`, \`points\`, \`trash\`,
\`wanted\`, \`love\`
 ------------------------------------------------------ 
-❯ **ECONOMY COMMANDS **

\`profile\`, \`coins\`, \`daily\`, \`rep\`, \`pay\`, \`title\`, \`background\`, \`background-remove\`
  ------------------------------------------------------
-❯ **BADWORDS COMMANDS**

\`addword\`, \`delword\`, \`wordlist\`
 ------------------------------------------------------ 
-❯ **GIVEWAY COMMANDS **

\`gstart\`, \`gend\`, \`greroll\`, \`gsetrole\`,
\`gblacklist\`, \`gcheck\`
  ------------------------------------------------------ 
 -❯ **REACTIONROLE COMMANDS**

 \`rradd\`, \`rrdel\`
 `)


  .setFooter('• PROTECTIONPLUS • DEVELOPER - JOKER OP ')
  .setImage('https://media.discordapp.net/attachments/853905572205428756/860562856973565962/standard.gif?width=374&height=48')
  .setColor('9e1c36');
    
        message.channel.send(embed)
       
    }


}