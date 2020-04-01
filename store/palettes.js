export const state = () => ({
	palettes: [
		{
			title: 'Guyn',
			colors: [
				'#3D4348',
				'#5C6368',
				'#8C9398',
				'#A6B3BD',
				'#BEC8D0',
				'#DDE5EB',
				'#1C011B',
				'#2E192D',
				'#664E66',
				'#390344',
				'#550764',
				'#620973',
				'#9710B2',
				'#B223CF',
				'#c12bdf',
				'#CB0C7A',
				'#E22D95',
				'#EE63B3',
				'#DA4C7E',
				'#E9709B',
				'#FE95BA',
				'#BF1A43',
				'#EF194F',
				'#FE688E',
				'#FF9E2E',
				'#FFAE41',
				'#FFCD61',
				'#FFC624',
				'#FFD764',
				'#FFEDAD',
				'#8DE922',
				'#98F42D',
				'#B1FF57',
				'#6AB933',
				'#7CDA0F',
				'#8AE24C',
				'#678752',
				'#89A974',
				'#B8D3A5',
				'#46C162',
				'#62F689',
				'#93FFB6',
				'#21C9B3',
				'#18ECD0',
				'#53FCE6',
				'#82DFFF',
				'#AAE9FF',
				'#CEF2FF',
				'#25A7E2',
				'#49BDF2',
				'#65CCFA',
				'#0C4D99',
				'#2E71BE',
				'#518CD0',
				'#051425',
				'#09203a',
				'#0b294a',
				'#9D5E27',
				'#B97B45',
				'#C69F7D',
				'#EEDEB8',
				'#F8ECD1',
				'#FFF9EB',
				'#ffffff',
				'#111111'
			]
		}
	]
});

export const mutations = {
	ADD_PALETTE(state, value) {
		state.palettes.push(value);
	},

	REMOVE_PALETTE(state, idx) {
		state.palettes.splice(idx, 1);
	}
};

export const getters = {
	getPalette: (state) => (id) =>
		state.palettes.find((palette) => palette.id === id),
	getPalettes: (state) => state.palettes
};

export const actions = {
	addPalette({ commit }, value) {
		commit('ADD_COLOR', value);
	},

	removeColorID({ commit, state }, id) {
		commit(
			'REMOVE_PALETTE',
			state.swatches.findIndex((color) => color.id === id)
		);
	}
};
