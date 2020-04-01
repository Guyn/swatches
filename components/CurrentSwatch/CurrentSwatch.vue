<template>
	<div
		class="current-swatch"
		:class="{ 'current-swatch--active': valid }"
		:style="
			`--hue: ${hue}deg; --saturation: ${saturation}%; --lightness: ${lightness}%;`
		"
	>
		<div class="current-swatch__ring">
			<span class="current-swatch__hue" :style="`--degree: ${hue}deg;`">
				<span></span>
			</span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 45}deg; --suggest-color: hsl(${hue +
						45}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 45)"
			>
				<span></span
			></span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 90}deg; --suggest-color: hsl(${hue +
						90}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 90)"
			>
				<span></span
			></span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 135}deg; --suggest-color: hsl(${hue +
						135}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 135)"
			>
				<span></span
			></span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 180}deg; --suggest-color: hsl(${hue +
						180}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 180)"
			>
				<span></span
			></span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 225}deg; --suggest-color: hsl(${hue +
						225}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 225)"
			>
				<span></span
			></span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 270}deg; --suggest-color: hsl(${hue +
						270}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 270)"
			>
				<span></span
			></span>
			<span
				class="current-swatch__suggestion"
				:style="
					`--degree: ${hue + 315}deg; --suggest-color: hsl(${hue +
						315}deg,${saturation}%,${lightness}%)`
				"
				@click="setColor(hue + 315)"
			>
				<span></span
			></span>

			<div
				v-if="valid"
				class="current-swatch__color"
				:style="`background-color: hsl(${hue}deg,${saturation}%,${lightness}%)`"
			/>
			<div class="current-swatch__info">
				<dl>
					<dt>hex</dt>
					<dd>{{ hex }}</dd>
				</dl>
				<dl>
					<dt>hsl</dt>
					<dd>{{ hue }}</dd>
					<dd>{{ saturation }}</dd>
					<dd>{{ lightness }}</dd>
				</dl>
				<dl>
					<dt>rgb</dt>
					<dd>{{ red }}</dd>
					<dd>{{ green }}</dd>
					<dd>{{ blue }}</dd>
				</dl>
			</div>
		</div>
		<div class="current-swatch__range current-swatch__range--hue">
			<input
				v-model="hue"
				class="current-swatch__input"
				type="range"
				min="0"
				max="360"
				:style="`--thumb-color: ${hex}`"
			/>
		</div>

		<div class="current-swatch__range current-swatch__range--saturation">
			<input
				v-model="saturation"
				class="current-swatch__input"
				type="range"
				min="0"
				max="100"
				:style="`--thumb-color: ${hex}`"
			/>
		</div>

		<div class="current-swatch__range current-swatch__range--lightness">
			<input
				v-model="lightness"
				class="current-swatch__input"
				type="range"
				min="0"
				max="100"
				:style="`--thumb-color: ${hex}`"
			/>
		</div>
	</div>
</template>

<script lang="ts" src="./CurrentSwatch.script.ts" />
<style lang="scss" src="./CurrentSwatch.scss" />
