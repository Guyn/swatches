<template>
	<nav class="navigation" :class="{ 'navigation--active': menuActive }">
		<ul class="navigation__list">
			<li v-for="(item, idx) in nav" :key="idx" class="navigation__item">
				<NuxtLink
					class="navigation__link"
					:to="item.path"
					:aria-label="`Go to ${item.name}`"
				>
					<span class="navigation__text">
						{{ item.name }}
					</span>
				</NuxtLink>
				<ul v-if="item.children.length > 0" class="navigation__sublist">
					<li
						v-for="(subitem, idy) in item.children"
						:key="idy"
						class="navigation__item navigation__subitem"
					>
						<NuxtLink
							class="navigation__link navigation__sublink"
							:to="subitem.path"
							:aria-label="`Go to ${subitem.name}`"
						>
							<span class="navigation__text navigation__subtext">
								{{ subitem.name }}
							</span>
						</NuxtLink>
					</li>
				</ul>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts" src="./Menu.script.ts" />
<style lang="scss" src="./Menu.style.scss" />
