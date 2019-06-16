const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "!";

client.login('NTg5NTAzOTU0MTIwMDgxNDE4.XQX4xA.C9Ppnt1PU8qJmBwAGeRVEYL_W4Y');
-
client.on('message', message =>{
    if(message.content === "!youtube"){
        message.reply('Voici la chaîne Youtube de la D3 eSport : https://www.youtube.com/channel/UCQAx9m4e-Z3w5vyiiRWt1vQ');
    }
    if(message.content === "!twitter"){
        message.reply('Voici le compte Twitter : https://twitter.com/D3Esport');
    }
    if(message.content === "!kennyx"){
        message.reply('Voici la chaîne Youtube, Twitch et le Compte Twitter de Kennyx : https://www.youtube.com/channel/UCaxwD19NOLkMYyCwn1wjCXQ?view_as=subscriber | https://www.twitch.tv/kennyx_tv | https://twitter.com/Kennyx_TV')
    }
    if(message.content === "!keozz"){
        message.reply('Voici la chaîne Youtube et le compte Twitter de Keozz : https://www.youtube.com/channel/UCZu2yn_5P1BTZr9BCPW2NtA | https://twitter.com/YanisZenaidi?s=09')
    }
    if(message.content === "!warzz"){
        message.reply('Voici la chaîne Youtube de Warzz : https://www.youtube.com/channel/UCbty4cpcS9l6Yo0jnxAzGfw')
    }
    if(message.content === "!jeyko"){
        message.reply('Voici la chaîne Youtube de Jeyko : https://www.youtube.com/channel/UCH60NlXHDTjUTjyKS3cJKKw')
    }
    if(message.content === "!never"){
        message.reply('Voici la chaîne Youtube de Never : https://www.youtube.com/channel/UClsJwCNcmTCsnxF9YHn9HWA')
    }
    if(message.content === "!slaayed"){
        message.reply('Voici la chaîne Youtube et le compte Twitter de Slaayed : https://www.youtube.com/channel/UCnL0EUCEEhUhpC_93ZeFojQ?view_as=subscriber | https://twitter.com/ASlaayed')
    }
    if(message.content === "!info"){
        message.reply('Voici toutes les commandes que je propose : !youtube | !twitter | !kennyx | !jeyko | !warzz | !keozz | !never | !slaayed')
    }
})

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('581809009825415170').send('**Bienvenue**' + member.user + ':smile: **Nous sommes à présent** ' + member.guild.memberCount);
})

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('581809009825415170').send('**Au revoir**' + member.user );
})
