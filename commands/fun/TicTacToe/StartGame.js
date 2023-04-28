const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startgame')
		.setDescription('Starts game of TicTacToe'),
	async execute(interaction) {

		const embed = {
			title: 'Test',
			description: 'E',
		};

		/*const row = {
			CustomId: 'test',
			Label: 'Test Button',
			Style: ButtonStyle.Secondary,
		};*/

		const testButton = new ButtonBuilder()
			.setCustomId('test')
			.setLabel('Test Button')
			.setStyle(ButtonStyle.Primary);

		const row = new ActionRowBuilder()
			.addComponents(testButton);

		await interaction.reply({
			content: 'testMessage',
			embeds: [embed],
			components: [row],
		});
	},
};