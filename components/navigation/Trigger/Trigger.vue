<template>
	<button
		class="navigation-trigger"
		:class="{ 'navigation-trigger--active': menuActive }"
		@click="menuActive = !menuActive"
	>
		<span></span>
	</button>
</template>

<script lang="ts" src="./Trigger.script.ts" />
<style lang="scss" src="./Trigger.style.scss" />
