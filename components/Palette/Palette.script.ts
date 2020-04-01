import { Vue, Component } from 'vue-property-decorator';

@Component<Palette>({
	name: 'Palette'
})
export default class Palette extends Vue {
	// Computed:
	public get swatches(): any {
		return this.$store.getters['palette/getSwatches'];
	}

	public set title(value: string) {
		this.$store.dispatch('palette/setTitle', value);
	}

	public get title(): string {
		return this.$store.getters['palette/getTitle'];
	}

	setColor(hex: string): void {
		this.$store.dispatch('current/setHex', hex);
	}

	removeColor(hex: string): void {
		this.$store.dispatch('palette/removeColorByHex', hex);
	}
}
