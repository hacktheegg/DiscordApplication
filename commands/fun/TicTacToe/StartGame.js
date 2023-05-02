const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startgame')
		.setDescription('Starts game of TicTacToe'),

	async execute(interaction) {

		const buttonLabels = [
			['A1', 'A2', 'A3'],
			['B1', 'B2', 'B3'],
			['C1', 'C2', 'C3']
		];

		const embedDescription = '🟦🟦🟦\n🟦🟦🟦\n🟦🟦🟦';
		const buttons = buttonLabels.map(row => row.map(label => {
			console.log(label);
			return new ButtonBuilder()
				.setCustomId(label.toLowerCase())
				.setLabel(label)
				.setStyle(ButtonStyle.Primary)
		}));

		const rows = buttons.map(row => new ActionRowBuilder().addComponents(row));
		const embed = {
			title: 'TicTacToe',
			description: embedDescription
		};

		await interaction.reply({
			content: '',
			embeds: [embed],
			components: rows
		});
	},
};