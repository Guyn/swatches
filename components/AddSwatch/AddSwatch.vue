<template>
	<div class="add-swatch">
		<div
			class="add-swatch__field"
			:class="[valid ? 'valid' : 'invalid', lightness > 50 ? 'light' : 'dark']"
		>
			<select v-model="colorType">
				<option value="hex">Hex</option>
				<option value="hsl">HSL</option>
				<option value="rgb">RGB</option>
			</select>
			<input
				v-if="colorType === 'hex'"
				v-model="hex"
				type="text"
				@keyup.enter="addColor"
			/>
			<input
				v-if="colorType === 'hsl'"
				v-model="hue"
				class="third"
				type="text"
				@keyup.enter="addColor"
			/>
			<input
				v-if="colorType === 'hsl'"
				v-model="saturation"
				class="third"
				type="text"
				@keyup.enter="addColor"
			/>
			<input
				v-if="colorType === 'hsl'"
				v-model="lightness"
				class="third"
				type="text"
				@keyup.enter="addColor"
			/>
			<input
				v-if="colorType === 'rgb'"
				v-model="red"
				class="third"
				type="text"
				@keyup.enter="addColor"
			/>
			<input
				v-if="colorType === 'rgb'"
				v-model="green"
				class="third"
				type="text"
				@keyup.enter="addColor"
			/>
			<input
				v-if="colorType === 'rgb'"
				v-model="blue"
				class="third"
				type="text"
				@keyup.enter="addColor"
			/>
			<button
				class="add-swatch__button button"
				:disabled="!valid"
				@click="addColor"
			>
				Add color
			</button>
		</div>
		<div
			v-if="valid"
			class="add-swatch__color"
			:class="{ 'add-swatch__color--active': valid }"
			:style="`background-color: hsl(${hue}deg,${saturation}%,${lightness}%)`"
		/>
	</div>
</template>

<script lang="ts" src="./AddSwatch.script.ts" />
<style lang="scss" src="./AddSwatch.scss" />
