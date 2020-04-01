import {
	isHex,
	// isHsl,
	// isRgb,
	hexToHsl,
	// rgbToHsl,
	hslToHex,
	// rgbToHex,
	between
} from '@guyn/convert/lib/color';

export const state = () => ({
	valid: false,
	color: {
		h: 0,
		s: 100,
		l: 50,
		hex: '#ff0000'
	}
});

export const mutations = {
	SET_COLOR(state, color) {
		state.color = color;
	},
	SET_VALID(state, bool) {
		state.valid = bool;
	},
	RESET() {}
};

export const getters = {
	hex: (state) => state.color.hex,
	color: (state) => state.color,
	current: (state) => state.current,
	hue: (state) => state.color.h,
	saturation: (state) => state.color.s,
	lightness: (state) => state.color.l,
	valid: (state) => state.valid
};

export const actions = {
	setHue({ commit, state }, value) {
		if (between(value, 0, 360, true)) {
			commit('SET_COLOR', {
				...state.color,
				h: value,
				hex: hslToHex({ h: value, s: state.color.s, l: state.color.l })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setSaturation({ commit, state }, value) {
		if (between(value, 0, 100, true)) {
			commit('SET_COLOR', {
				...state.color,
				s: value,
				hex: hslToHex({ h: state.color.h, s: value, l: state.color.l })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setLightness({ commit, state }, value) {
		if (between(value, 0, 100, true)) {
			commit('SET_COLOR', {
				...state.color,
				l: value,
				hex: hslToHex({ h: state.color.h, s: state.color.s, l: value })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setHex({ commit }, value) {
		if (isHex(value)) commit('SET_COLOR', { ...hexToHsl(value), hex: value });
		commit('SET_VALID', isHex(value));
	},
	reset({ commit }) {
		commit('RESET');
	}
};
