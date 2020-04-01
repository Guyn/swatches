export const state = () => ({
	swatches: [],
	title: ''
});

export const mutations = {
	ADD_COLOR(state, color) {
		state.swatches.push(color);
	},
	SET_TITLE(state, value) {
		state.title = value;
	}
};

export const getters = {
	getTitle: (state) => state.title,
	getSwatches: (state) => state.swatches
};

export const actions = {
	addColor({ commit }, value) {
		commit('ADD_COLOR', value);
	},
	setTitle({ commit }, value) {
		commit('SET_TITLE', value);
	}
};
