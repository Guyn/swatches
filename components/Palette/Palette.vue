<template>
	<div class="palette">
		<div class="palette__info">
			<input v-model="title" type="text" />
		</div>
		<ul class="palette__list">
			<li v-for="(swatch, idx) in swatches" :key="idx" class="palette__item">
				<span
					class="palette__dot"
					:style="
						`background-color: hsl(${swatch.h}deg,${swatch.s}%,${swatch.l}%)`
					"
					@click="color = swatch"
				/>
				<span class="palette__info">
					hue: {{ swatch.h }}<br />
					sat: {{ swatch.s }}<br />
					lig: {{ swatch.l }}
				</span>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" src="./Palette.script.ts" />
<style lang="scss" src="./Palette.scss" />
