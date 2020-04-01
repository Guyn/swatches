<template>
	<main class="page page--home">
		<div class="create-swatches">
			<CurrentSwatch />
			<AddSwatch />
			<Palette />
			<DownloadPalette />
		</div>
	</main>
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
export default {
	components: {
		Palette,
		AddSwatch,
		DownloadPalette,
		CurrentSwatch
	}
};
</script>

<style lang="scss">
@import '~tools';

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
.create-swatches {
	display: flex;
	flex-direction: column;
	width: 480px;
	box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
	margin: auto;
	border-radius: $base-border-radius;
	> div {
		& + div {
			border-top: 1px solid rgba(0, 0, 0, 0.1);
		}
	}
}
</style>
