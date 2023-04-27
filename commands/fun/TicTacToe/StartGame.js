const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startgame')
		.setDescription('Starts game of TicTacToe'),
	async execute(interaction) {
		const test = new ButtonBuilder()
			.setCustomId('test')
			.setLabel('TestButton')
			.setStyle(ButtonStyle.Primary);

		const buttons = new ActionRowBuilder()
			.addComponents(test);

		await interaction.reply({
			content: `Test`,
			components: [buttons],
			});
	},
};