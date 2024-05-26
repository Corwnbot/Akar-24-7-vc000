const http = require('http');
const express = require('express');
const app = express();

// Serve static files from the root directory
app.use(express.static(__dirname));

// Serve the HTML file on the root route
app.get("/", (request, response) => {
  response.sendFile('web.html', { root: __dirname });
});

// Start the server on the specified port
app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});

// Keep the app alive by pinging itself every 280 seconds
setInterval(() => {
  http.get(`http://Name-Project.glitch.me/`);
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
    client.channels.fetch(process.env.id)
      .then((channel) => {
        const VoiceConnection = joinVoiceChannel({
          channelId: channel.id,
          guildId: channel.guild.id,
          adapterCreator: channel.guild.voiceAdapterCreator
        });
      }).catch((error) => { return; });
  }, 1000)
});
