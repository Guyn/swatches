<template>
	<div class="layout layout-default" :class="colorMode">
		<Header />
		<nuxt />
		<Footer />
	</div>
</template>

<script>
import Header from '~/components/layout/Header';
import Footer from '~/components/layout/Footer';

export default {
	components: {
		Header,
		Footer
	},
	computed: {
		colorMode() {
			return this.$store.state.ui.colorMode;
		}
	}
};
</script>
