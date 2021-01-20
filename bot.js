const { Client } = require('discord.js');

const bot = new Client();

client.on('ready', () => {
    console.log('Bot Testing ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
    }
});

client.login(process.env.BOT_TOKEN);
