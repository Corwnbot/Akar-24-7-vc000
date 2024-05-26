const http = require('http');
const express = require('express');
const app = express();
app.get('/', function (request, response) {
  response.sendFile(__dirname + '/web.html');
});
const id = process.env.id;
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`/`);
}, 280000);

const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

const { joinVoiceChannel } = require('@discordjs/voice');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity('By 18-81', { type: 'PLAYING' });
});

client.login(process.env.t);

client.on('ready', () => {
  setInterval(async () => {
    client.channels.fetch(`${id}`)
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
