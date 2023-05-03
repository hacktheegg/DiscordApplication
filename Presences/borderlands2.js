const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token, clientId } = require('./../config.json');
const DiscordRPC = require('discord-rpc');
const rpc = new DiscordRPC.Client({ transport: 'ipc' });

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
	rpc.login({ clientId }).catch(console.error);
	rpc.on('ready', () => {
		rpc.setActivity({
			details: "Just started playing",
			//state: "state",
			largeImageKey: "borderlands2icon",
			//largeImageText: "fake"
			name: "test"
		});
	});
});

client.login(token);