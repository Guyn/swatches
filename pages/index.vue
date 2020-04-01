<template>
	<div>
		<main
			class="page page--home"
			:style="`--background: ${hex}`"
			:class="[lightness > 50 ? 'light' : 'dark']"
		>
			<div class="create-swatches">
				<CurrentSwatch />
				<AddSwatch />
				<Palette />
				<DownloadPalette />
			</div>
			<PaletteList />
		</main>
	</div>
</template>

<script>
// import {
// 	AddSwatch
// 	// Palette
// 	// DownloadPalette
// 	// CurrentSwatch
// } from '@/components';

import AddSwatch from '@/components/AddSwatch';
import CurrentSwatch from '@/components/CurrentSwatch';
import DownloadPalette from '@/components/DownloadPalette';
import Palette from '@/components/Palette';
import PaletteList from '@/components/PaletteList';
export default {
	components: {
		Palette,
		AddSwatch,
		DownloadPalette,
		CurrentSwatch,
		PaletteList
	},
	computed: {
		hex() {
			return this.$store.getters['current/getHex'];
		},
		lightness() {
			return this.$store.getters['current/getLightness'];
		}
	}
};
</script>

<style lang="scss">
@import '~tools';

.button {
	display: inline-block;
	border: 2px solid var(--text);
	background-color: var(--body);
	color: var(--text);
	font-weight: bold;
	font-size: 1em;
	padding: 0.5em;
}

.page {
	&--home {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: var(--background);
		transition: background 1s ease-in-out;
		&.light {
			--body: #202020;
			--text: white;
		}
		&.dark {
			--body: white;
			--text: #202020;
		}
	}
}
.create-swatches {
	display: flex;
	flex-direction: column;
	width: 480px;
	max-width: 100%;
	box-shadow: 0 0 100px 0 rgba(0, 0, 0, 0.21);
	margin: auto;
	border-radius: $base-border-radius;
	background-color: var(--body);
	color: var(--text);
	> div {
		& + div {
			position: relative;
			&::before {
				content: '';
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 1px;
				background-color: var(--text);
				opacity: 0.25;
			}
		}
	}
}
</style>
