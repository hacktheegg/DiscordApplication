const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();
const commandsPath = path.join(__dirname, 'commands');
readCommands(commandsPath, client.commands);

client.once(Events.ClientReady, () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on(Events.InteractionCreate, async interaction => {
	if (interaction.isCommand()) {
		const command = client.commands.get(interaction.commandName);
		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	} else if (interaction.isButton()) {
		const command = client.commands.get(interaction.customId);
		if (!command) return;

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
});

client.login(token);

function readCommands(commandsPath, commands) {
	const files = fs.readdirSync(commandsPath);
	for (const file of files) {
		const filePath = path.join(commandsPath, file);
		if (fs.statSync(filePath).isDirectory()) {
			readCommands(filePath, commands);
		} else if (file.endsWith('.js')) {
			const command = require(filePath);
			if ('data' in command && 'execute' in command) {
				commands.set(command.data.name, command);
			} else {
				console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
			}
		}
	}
}



/*if (!interaction.isChatInputCommand()) return;
const command = client.commands.get(interaction.commandName);
if (!command) return;
try {
	await command.execute(interaction);
} catch (error) {
	console.error(error);
	if (interaction.replied || interaction.deferred) {
		await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
	} else {
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
}*/