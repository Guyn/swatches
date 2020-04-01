<template>
	<div v-if="swatches.length > 0" class="palette">
		<div class="palette__info">
			<input v-model="title" type="text" />
		</div>
		<ul class="palette__list">
			<li
				v-for="(swatch, idx) in swatches"
				:key="idx"
				class="palette__item"
				:class="{ 'palette__item--glow': swatch.state == 'glow' }"
				@click="setColor(swatch.hex)"
			>
				<span
					class="palette__dot"
					:style="
						`background-color: hsl(${swatch.h}deg,${swatch.s}%,${swatch.l}%)`
					"
					@click="color = swatch"
				/>
				<span class="palette__remove" @click="removeColor(swatch.hex)"> </span>
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
