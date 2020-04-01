export const state = () => ({
	swatches: [],
	title: ''
});

export const mutations = {
	ADD_COLOR(state, value) {
		const color = { ...value, state: 'idle' };
		state.swatches.push(color);
		// state.swatches.push(value);
	},
	SET_GLOW(state, value) {
		state.swatches[value.idx].state = value.active ? 'glow' : '';
	},

	SET_TITLE(state, value) {
		state.title = value;
	},
	REMOVE_COLOR(state, idx) {
		state.swatches.splice(idx, 1);
	}
};

export const getters = {
	getTitle: (state) => state.title,
	getSwatches: (state) => state.swatches
};

export const actions = {
	addColor({ commit, state }, value) {
		const idx = state.swatches.findIndex((color) => color.hex === value.hex);
		if (idx < 0) {
			commit('ADD_COLOR', value);
		} else {
			commit('SET_GLOW', { idx, active: true });
			setTimeout(() => {
				commit('SET_GLOW', { idx, active: false });
			}, 1000);
		}
	},
	setTitle({ commit }, value) {
		commit('SET_TITLE', value);
	},
	removeColorByHex({ commit, state }, value) {
		commit(
			'REMOVE_COLOR',
			state.swatches.findIndex((color) => color.hex === value)
		);
	},
	removeColorByHsl({ commit, state }, value) {
		commit(
			'REMOVE_COLOR',
			state.swatches.findIndex((color) => {
				return (
					color.h === value.h && color.s === value.s && color.l === value.l
				);
			})
		);
	}
};
