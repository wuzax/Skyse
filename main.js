const { Client, Partials, IntentsBitField } = require("discord.js")
require("dotenv").config()
const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.MessageContent
    ],
    partials: [
        Partials.Message,
        Partials.GuildMember,
        Partials.User
    ]
})

client.on("ready", () => {
    console.log(`${client.user.tag} est désormais pas ligne !`)
})

client.login(process.env.TOKEN)