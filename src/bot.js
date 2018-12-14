// Import the discord.js module
const {Client, Attachment} = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

// File Stream Configuration
const path = '../files';
var fs = require('fs');

var i = 0;

// Bot Ready
client.on('ready', () => {
  console.log('I am ready!');
});

// Main Core for the Application
client.on('message', message => {
  if (i === 0){
    message.channel.send('Hello, I am your File Bot! How can I help you?');
    i++;
  }  

  if(message.content === 'download files'){
    message.channel.send(`${message.author}, here are your files available for download!`);
    var files = fs.readdirSync(path);

    files.forEach(function (file){
      const attachment = new Attachment(path+'/'+file);
      message.channel.send(attachment);
    });
  }
});

// Bot Login using the Giving Token
client.login('NTIxOTM1NjY5ODc5MTExNjgw.DvKfcQ.JLXkxaasSQ_OcxGF8NVEToN4XIM');
