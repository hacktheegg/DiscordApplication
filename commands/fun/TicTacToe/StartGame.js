const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('startgame')
		.setDescription('Starts game of TicTacToe'),

	async execute(interaction) {

		/*const buttonLabels = [
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

		const GameState = await interaction.reply({
			content: '',
			embeds: [embed],
			components: rows
		});

		const collectorFilter = i => i.user.id === interaction.user.id;

		try {
			const message = await GameState.awaitMessageComponent({ filter: collectorFilter, time: 60000 });

			if (messsage.customId === 'A1') {
				await message.update({
					content: 'yes',
					components: []
				});
			} else {
				await message.update({
					content: 'no',
					components: []
				});
			}
		} catch (e) {
			console.log("error");
		}*/



		
		const button = new ButtonBuilder()
			.setCustomId('testId')
			.setLabel('test')
			.setStyle(ButtonStyle.Primary)

		const buttonRow = new ActionRowBuilder()
			.addComponents(button);

		const embed = {
			title: 'TicTacToe',
			description: 'test'
		};

		const response = await interaction.reply({
			content: 'messageTest',
			embeds: [embed],
			components: [buttonRow]
		});

		const collectorFilter = i => i.user.id === interaction.user.id;
		try {
			const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 6000 });

			if (confirmation.customId === 'testId') {
				await confirmation.update({ content: `editedMessage`, embeds: [], components: [] });
			}
		} catch (e) {
			await response.update({ content: 'timed out', embeds: [], components: [] });
		}
	},
};