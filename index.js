// Starter code from discord.js documentation: https://discordjs.guide/creating-your-bot/main-file.html#running-your-application


// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create a new client instance
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,              // Required to interact with servers
        GatewayIntentBits.GuildMessages,       // Required to interact with messages
        GatewayIntentBits.MessageContent,      // Required to read message content
        GatewayIntentBits.GuildMembers         // Required to listen to member joins
    ] 
});


// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});


// Listens for messages in the server
client.on('messageCreate', message => {
    if(message.author.bot) return; // Ignore bot messages

    // Check if the message is a command

    // Command !goodmorning, respond with a greeting
    if(message.content.toLowerCase() === '!goodmorning') {
        // React with sun emoji
        message.react('☀️');
        message.channel.send(`Good morning, ${message.author.username}! How are we feeling today?\n\n(!roll to see your fate)`);
    }
    // Command !roll, roll a D6
    if (message.content.toLowerCase() === '!roll') {
        // Generate a random number between 1 and 6
        const roll = Math.floor(Math.random() * 6) + 1;

        // Responses
        const responses = {
            1: 'Oh no, its a 1... You woke up on the wrong side of the bed today. Stay away from important decisions...',
            2: 'You rolled a 2... Sleepy... very very very sleepy...',
            3: 'A 3! Average roll, average day. Nothing special, nothing bad. Just a day.',
            4: 'Rolled a 4! Not bad, not bad. You might get some work done today.',
            5: 'Nice! A 5 means the sky is blue, the sun is out, and the grass is definitely greener. Today will be a good day!',
            6: 'Woah! A 6! You are on fire today! Go out there and conquer the world! Carpe Diem!'
        };

        // React with the number rolled
        message.channel.send(responses[roll]);
    }
})

// Listen when a new member joins the server
client.on('guildMemberAdd', member => {
    member.guild.channels.cache
        // Find the channel with the name 'general' or change it to your welcome channel
        .find(channel => channel.name === 'general')
        // Sends a welcome message to introduce bot command
        .send(`Welcome to the server, ${member}!\nThis server is just a fun way to get a feel for your day. Use '!goodmorning' to get started!`)

})

// Log in to Discord with your client's token
client.login(process.env.BOT_TOKEN);