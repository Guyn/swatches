import { Vue, Component } from 'vue-property-decorator';

@Component<PaletteList>({
	name: 'PaletteList'
})
export default class PaletteList extends Vue {
	// Computed:
	public get palettes(): any {
		return this.$store.getters['palettes/getPalettes'];
	}

	// public set title(value: string) {
	// 	this.$store.dispatch('palette/setTitle', value);
	// }

	// public get title(): string {
	// 	return this.$store.getters['palette/getTitle'];
	// }

	// setColor(hex: string): void {
	// 	this.$store.dispatch('current/setHex', hex);
	// }

	// removeColor(hex: string): void {
	// 	this.$store.dispatch('palette/removeColorByHex', hex);
	// }
	setCurrentPalette(): void {
		console.log('heej palette');
	}

	setCurrentColor(color: string): void {
		this.$store.dispatch('current/setHex', color);
	}
}
