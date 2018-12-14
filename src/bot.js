// Import the discord.js module
const {Client, Attachment} = require('discord.js');

// Create an instance of a Discord client
const client = new Client();

// File Stream Configuration
const path = '../files';
var fs = require('fs');

// Donwload Files Function
let request = require('request');

function download(url, filename){
  request.get(url)
    .on('error', console.error)
    .pipe(fs.createWriteStream(path+'/'+filename));
}

// Environment Variables
var i = false;
var v = false;
var n = 1;

// Bot Ready
client.on('ready', () => {
  console.log('I am ready!');
});

// Main Core for the Application
client.on('message', message => {
  v = false;
  
  if (i === false){
    message.channel.send('Hello, I am your File Bot! How can I help you?');
    i = true;
  }
  
  if (v === false){
    message.attachments.forEach(function(attachment){
      download(attachment.url, attachment.filename);
      message.channel.send('Upload Successful!');
    });
  }

  if(message.content === 'download files'){
    v = true;
    var files = fs.readdirSync(path);

    message.channel.send(`${message.author}, here are your files available for download!`);
    
    files.forEach(function (file){
      const attachment = new Attachment(path+'/'+file);
      message.channel.send(attachment);
    });
  }
});

// Bot Login using the Giving Token
client.login('NTIxOTM1NjY5ODc5MTExNjgw.DvKfcQ.JLXkxaasSQ_OcxGF8NVEToN4XIM');
