<template>
	<div class="palette-list">
		<h2 class="palette-list__title">Palettes</h2>
		<ul class="palette-list__list">
			<li
				v-for="(palette, idx) in palettes"
				:key="idx"
				class="palette_list__item"
				@click="setCurrentPalette(palette)"
			>
				<div class="palette-item">
					<h4 class="palette-item__title">{{ palette.title }}</h4>
					<ul class="palette-item__colors">
						<li
							v-for="(color, idc) in palette.colors"
							:key="idc"
							class="palette-item__color"
							@click="setCurrentColor(color)"
						>
							<div
								class="palette-item__dot"
								:style="`background-color:${color}`"
							></div>
						</li>
					</ul>
				</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts" src="./PaletteList.script.ts" />
<style lang="scss" src="./PaletteList.style.scss" />
