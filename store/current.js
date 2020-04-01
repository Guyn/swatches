import {
	isHex,
	hexToRgb,
	hexToHsl,
	rgbToHsl,
	hslToHex,
	hslToRgb,
	rgbToHex,
	between
} from '@guyn/convert/lib/color';

export const state = () => ({
	valid: true,
	color: {
		h: 80,
		s: 20,
		l: 80,
		r: 207,
		g: 214,
		b: 194,
		hex: '#cfd6c1'
	}
});

export const mutations = {
	SET_COLOR(state, color) {
		state.color = color;
	},
	SET_VALID(state, bool) {
		state.valid = bool;
	}
};

export const getters = {
	getHex: (state) => state.color.hex,
	getColor: (state) => state.color,
	getHue: (state) => state.color.h,
	getSaturation: (state) => state.color.s,
	getLightness: (state) => state.color.l,
	getRed: (state) => state.color.r,
	getGreen: (state) => state.color.g,
	getBlue: (state) => state.color.b,
	getValid: (state) => state.valid
};

export const actions = {
	setHue({ commit, state }, value) {
		if (between(value, 0, 360, true)) {
			const rgb = hslToRgb({ h: value, s: state.color.s, l: state.color.l });

			commit('SET_COLOR', {
				...state.color,
				...rgb,
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
			const rgb = hslToRgb({ h: state.color.h, s: value, l: state.color.l });
			commit('SET_COLOR', {
				...state.color,
				...rgb,
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
			const rgb = hslToRgb({ h: state.color.h, s: state.color.s, l: value });
			commit('SET_COLOR', {
				...state.color,
				...rgb,
				l: value,
				hex: hslToHex({ h: state.color.h, s: state.color.s, l: value })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setRed({ commit, state }, value) {
		if (between(value, 0, 255, true)) {
			const hsl = rgbToHsl({
				r: value,
				g: state.color.g,
				b: state.color.b
			});
			commit('SET_COLOR', {
				...state.color,
				...hsl,
				r: value,
				hex: rgbToHex({ r: value, g: state.color.g, b: state.color.b })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setGreen({ commit, state }, value) {
		if (between(value, 0, 255, true)) {
			const hsl = rgbToHsl({
				r: state.color.r,
				g: value,
				b: state.color.b
			});
			commit('SET_COLOR', {
				...state.color,
				...hsl,
				g: value,
				hex: rgbToHex({ r: state.color.r, g: value, b: state.color.b })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setBlue({ commit, state }, value) {
		if (between(value, 0, 255, true)) {
			const hsl = rgbToHsl({
				r: state.color.r,
				g: state.color.g,
				b: value
			});
			commit('SET_COLOR', {
				...state.color,
				...hsl,
				b: value,
				hex: rgbToHex({ r: state.color.r, g: state.color.g, b: value })
			});
			commit('SET_VALID', true);
		} else {
			commit('SET_VALID', false);
		}
	},
	setHex({ commit }, value) {
		if (isHex(value))
			commit('SET_COLOR', {
				...hexToHsl(value),
				...hexToRgb(value),
				hex: value
			});
		commit('SET_VALID', isHex(value));
	}
};
