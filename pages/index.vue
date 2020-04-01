<template>
	<main class="page page--home">
		<div class="create-swatches">
			<div
				class="current-swatch"
				:class="{ 'current-swatch--active': valid }"
				:style="
					`--hue: ${hue}deg; --saturation: ${saturation}%; --lightness: ${lightness}%;`
				"
			>
				<div class="current-swatch__ring">
					<span class="current-swatch__hue" :style="`--degree: ${hue}deg`">
						<span></span>
					</span>

					<div
						v-if="valid"
						class="current-swatch__color"
						:style="
							`background-color: hsl(${hue}deg,${saturation}%,${lightness}%)`
						"
					/>
				</div>
				<div class="testttt">
					h: {{ hue }}<br />
					s: {{ saturation }}<br />
					l: {{ lightness }} <br />
				</div>
				<div class="current-swatch__range current-swatch__range--hue">
					<input
						v-model="hue"
						class="current-swatch__input"
						type="range"
						min="0"
						max="360"
					/>
				</div>

				<div class="current-swatch__range current-swatch__range--saturation">
					<input
						v-model="saturation"
						class="current-swatch__input"
						type="range"
						min="0"
						max="100"
					/>
				</div>

				<div class="current-swatch__range current-swatch__range--lightness">
					<input
						v-model="lightness"
						class="current-swatch__input"
						type="range"
						min="0"
						max="100"
					/>
				</div>
			</div>

			<div class="add-swatch">
				<div
					class="add-swatch__field"
					:class="[
						valid ? 'valid' : 'invalid',
						lightness > 50 ? 'light' : 'dark'
					]"
				>
					<div
						v-if="valid"
						class="add-swatch__color"
						:class="{ 'add-swatch__color--active': valid }"
						:style="
							`background-color: hsl(${hue}deg,${saturation}%,${lightness}%)`
						"
					/>
					<label>Hex</label>
					<input v-model="hex" type="text" @keyup.enter="addColor" />
				</div>
				<button
					class="add-swatch__button button"
					:disabled="!valid"
					@click="addColor"
				>
					Add color
				</button>
			</div>

			<!-- <div class="swatches">
			<ul class="swatches__list">
				<li v-for="(swatch, idx) in swatches" :key="idx" class="swatches__item">
					<span
						class="swatches__dot"
						:style="
							`background-color: hsl(${swatch.h}deg,${swatch.s}%,${swatch.l}%)`
						"
						@click="color = swatch"
					/>
					<span class="swatches__info">
						hue: {{ color.h }}<br />
						sat: {{ color.s }}<br />
						lig: {{ color.l }}
					</span>
				</li>
			</ul>
		</div> -->

			<div class="download">
				<input v-model="paletteName" type="text" />
				<button class="button" :disabled="!valid" @click="addColor">
					Download swatches
				</button>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	components: {},
	data: () => ({
		paletteName: ''
	}),
	computed: {
		swatches() {
			return this.$store.getters['swatches/colors'];
		},
		valid() {
			return this.$store.getters['current/valid'];
		},
		hue: {
			get() {
				return this.$store.getters['current/hue'];
			},
			set(value) {
				this.$store.dispatch('current/setHue', parseInt(value));
			}
		},
		saturation: {
			get() {
				return this.$store.getters['current/saturation'];
			},
			set(value) {
				this.$store.dispatch('current/setSaturation', parseInt(value));
			}
		},
		lightness: {
			get() {
				return this.$store.getters['current/lightness'];
			},
			set(value) {
				this.$store.dispatch('current/setLightness', parseInt(value));
			}
		},
		hex: {
			get() {
				return this.$store.getters['current/hex'];
			},
			set(value) {
				this.$store.dispatch('current/setHex', value);
			}
		},
		color() {
			return this.$store.getters['current/color'];
		}
	},
	watch: {},

	methods: {
		addColor() {
			if (this.valid) {
				this.$store.dispatch('swatches/addColor', this.color);
				this.$store.dispatch('current/reset');
			}
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.swatches {
	display: block;
	width: 100%;
	&__list {
		display: flex;
		align-items: flex-start;
	}
	&__item {
		position: relative;
		width: 3em;
		height: 3em;
		padding: 0.25em;
	}
	&__dot {
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 0.25em;
		&:hover + .swatches__info {
			opacity: 1;
		}
	}
	&__info {
		position: absolute;
		top: 100%;
		left: 0;
		border: 1px solid red;
		white-space: nowrap;
		opacity: 0;
		padding: 1em;
	}
}

.button {
	display: inline-block;
	border: 2px solid currentColor;
	font-weight: bold;
	font-size: 1em;
	padding: 0.5em;
}

.page {
	&--home {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
}
.add-swatch {
	&__field {
		position: relative;
		display: flex;
		background-color: black;
		color: white;
		label,
		input {
			border: none;
			color: inherit;
			font-size: 2em;
			line-height: 1;
			padding: 1em;
		}
		input {
			background-color: transparent;
			&:focus {
				outline: none;
			}
		}
		label {
			opacity: 0.5;
		}

		&.invalid {
			box-shadow: 0 0 0 2px var(--color-red) inset;
		}
		&.valid {
			box-shadow: 0 0 0 2px transparent inset;
			// border-color: rgba(0, 0, 0, 0.25);
		}
	}
	&__color {
		position: absolute;
		top: 50%;
		right: 2em;
		z-index: -1;
		display: block;
		width: 4em;
		height: 4em;
		border-radius: inherit;
		transform: translatY(-50%) scale(0.5);
		transform-origin: 0 0;
		opacity: 0;
		transition: transform $base-transition;

		&--active {
			transform: translateY(-50%) scale(1);
			opacity: 1;
		}
	}
}
.current-swatch {
	position: relative;
	transition: height $base-transition;
	padding: 1em;
	&__color {
		width: 100%;
		height: 0;
		padding-bottom: 100%;
		border: 4px solid white;
		border-radius: 50%;
		transform: scale(0.5);
		overflow: hidden;
		opacity: 0;
		transition: transform 1s;
	}
	&__ring {
		position: relative;
		border-radius: 50%;
		background: conic-gradient(
			hsl(0, var(--saturation), var(--lightness)),
			hsl(60, var(--saturation), var(--lightness)),
			hsl(120, var(--saturation), var(--lightness)),
			hsl(180, var(--saturation), var(--lightness)),
			hsl(240, var(--saturation), var(--lightness)),
			hsl(320, var(--saturation), var(--lightness)),
			hsl(0, var(--saturation), var(--lightness))
		);
		transform: scale(0.5);
		opacity: 0;
		transition: transform 1s 0.5s;
		padding: 1em;
	}
	// &__hue {
	// 	position: absolute;
	// 	top: 0%;
	// 	left: 50%;
	// 	width: 1rem;
	// 	height: 50%;
	// 	transform: translateX(-50%) rotate(calc(var(--degree)));
	// 	transform-origin: 50% 100%;
	// 	transition: transform $base-transition;
	// 	span {
	// 		position: absolute;
	// 		top: 0%;
	// 		left: 50%;
	// 		width: 2em;
	// 		height: 2em;
	// 		border: 4px solid white;
	// 		border-radius: 50%;
	// 		transform: translateX(-50%) translateY(-25%);
	// 	}
	// }
	&__range {
		display: block;
		width: 100%;
		height: 2em;
		border-radius: 1em;
		margin-top: 1em;

		&--hue {
			background: linear-gradient(
				to right,
				hsl(0, var(--saturation), var(--lightness)),
				hsl(60, var(--saturation), var(--lightness)),
				hsl(120, var(--saturation), var(--lightness)),
				hsl(180, var(--saturation), var(--lightness)),
				hsl(240, var(--saturation), var(--lightness)),
				hsl(320, var(--saturation), var(--lightness)),
				hsl(0, var(--saturation), var(--lightness))
			);
		}
		&--saturation {
			background: linear-gradient(
				to right,
				hsl(var(--hue), 0%, var(--lightness)),
				hsl(var(--hue), 100%, var(--lightness))
			);
		}
		&--lightness {
			background: linear-gradient(
				to right,
				hsl(var(--hue), var(--saturation), 0%),
				hsl(var(--hue), var(--saturation), 50%),
				hsl(var(--hue), var(--saturation), 100%)
			);
		}
	}
	&__range {
		// position: absolute;
		// top: 0;
		// left: 0;
		// width: 200%;
		// height: 12.5%;
		// background: transparent;
		// transform: translateY(-100%) rotate(90deg);
		// transform-origin: 0 100%;
	}
	&--active {
		// height: #{$size};
		.current-swatch__ring,
		.current-swatch__color {
			transform: scale(1);
			opacity: 1;
		}
	}
}
.create-swatches {
	display: flex;
	flex-direction: column;
	width: 480px;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
	margin: auto;
	padding: 1em;
}
</style>
