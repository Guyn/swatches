<template>
	<div v-if="hasSwatches" class="download-palette">
		<div v-if="status === 'idle'" class="download-palette__idle">
			<button class="button" :disabled="!valid" @click="download">
				Download swatches
			</button>
		</div>
		<div v-if="status === 'loading'" class="download-palette__loading">
			<p>Preparing your download</p>
		</div>
		<div v-if="status === 'thanks'" class="download-palette__thanks">
			<p>You have downloaded your panel, have fun!</p>
		</div>
	</div>
</template>

<script lang="ts" src="./DownloadPalette.script.ts"></script>
<style lang="scss" src="./DownloadPalette.scss" />
