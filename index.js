const Discord = require("discord.js");
const fs = require("fs");
require("dotenv").config();
const client = new Discord.Client();
const config = {
  prefix: "4"
};
//////////////////////////////
const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(3000);
setInterval(() => {
  http.get(`https://hhhhas.herokuapp.com/`);
  console.log("refrsh")
}, 060000);
/////////////////////////////
client.config = config;
client.queue = new Map();

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});

client.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach((file) => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`[Command Manager]: Loading Command ${commandName}`);
    client.commands.set(commandName, props);
  });
});

client.login(process.env.BOT_TOKEN)
