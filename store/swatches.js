export const state = () => ({
	swatches: []
});

export const mutations = {
	ADD_COLOR(state, color) {
		state.swatches.push(color);
	}
};

export const getters = {
	colors: (state) => state.swatches
};

export const actions = {
	addColor({ commit }, value) {
		commit('ADD_COLOR', value);
	}
};
