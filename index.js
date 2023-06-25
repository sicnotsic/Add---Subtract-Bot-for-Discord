const {Client, GatewayIntentBits } = require('discord.js')
require('dotenv/config')

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
})

client.login(process.env.TOKEN)

client.on('ready', () => {
    console.log('the bot is ready')
    console.log('what!!!')
})

client.on('message', message => {
    const money = 0;
    if(message.content === 'ping'){
        message.reply('hi!')
    }
    function AddMoney(lastvalue,newval){
        const money1 = lastvalue + newval
        return money1 
    }
})
