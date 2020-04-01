<template>
	<header id="header" class="header">
		<h3 class="header__logo">
			<NuxtLink to="/">
				{{ projectName }}
			</NuxtLink>
		</h3>
		<Trigger />
		<Menu />
	</header>
</template>

<script lang="ts" src="./Header.script.ts" />
<style lang="scss" src="./Header.style.scss" />
