const Discord = require("discord.js")
const client = new Discord.Client()
const { token , prefix } = require('./config.json')


client.on('ready', () => {
    console.log('Active!!')
})

client.on('message', msg => {
    if(msg.content === 'hi') {
        msg.reply('wassup')
    }
})

client.on('message', message => {
    if(message.content.startsWith(`${prefix}ping`)) {
        const ping = new Discord.MessageEmbed()
        .setDescription(`🏓\`${client.ws.ping}\`ms, Pong!!`)
        message.channel.send(ping)
    } else if(message.content.startsWith(`${prefix}avatar`)) {
        const avatar = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`)
        .setColor('#00D0F9')
        .setDescription('Enjoy!!')
        .setImage(message.author.displayAvatarURL())
        message.channel.send(avatar)
    }
})

client.login(token)