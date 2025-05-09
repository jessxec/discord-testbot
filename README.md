# Discord Bot Coding Challenge

This is a simple Discord bot built using `discord.js`. 

# Features
- greets new members to server with a personalized greeting and introduction to bot command
- responds to `!goodmorning` with the sender's username
- reacts to the `!goodmorning` with a '☀️' emoji
- rolls a D6 when a user sends `!roll` and responds accordingly to determine their day

# Setup Instructions
1. Clone the repo or download the zipped files.
2. Run `npm install` to install package dependencies.
3. Create a `.env` file by copying the example `.env.example` and replacing with your real token.
4. Run the bot with `npm start`.


# Thought Process
- What decisions did you make when implementing the message response and D6 behavior?
    Both behaviors were done with the messageCreate event listener. 

    For the first task for the bot to respond to a user-initiated message with a personalized reply, I did a message string comparison with the command that will then elicit a response that includes the user's username. I used the .react function as a fun way to give further interactions with the bot. Using the `!goodmorning` command, users are prompted to roll a D6, using the `!roll` command, to determine their fate for the day. I used another command to do the roll behavior because it was the most simple interaction to quickly roll a die. I used Math.random to generate a random number between 1 and 6 and mapped responses to the respective number. 

- If you wanted to add another feature in the future (like detecting bad words or handling slash commands), what would you research next? How would you research it?

  In considerations of future features, I would look at Discord's developer documentations. There are also a ton of existing open-source repositories/guides focused on creating server bots that may even offer a more intuitive/easy to understand documentation. For detecting bad words, my process would be to research how to filter messages using the messageCreate event listener, search for libraries for profanity filtering, and how to warn users, delete messages, or log violations. For slash commands, I would most likely look at Discord's API on how to register slash commands and how to respond to slash commands using a different type of event listener, such as interactionCreate.
