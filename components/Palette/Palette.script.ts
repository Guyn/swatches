import { Vue, Component } from 'vue-property-decorator';

@Component<Palette>({
	name: 'Palette'
})
export default class Palette extends Vue {
	// Computed:
	swatches: any = this.$store.getters['palette/getSwatches'];
	title: any = {
		get(): string {
			return this.$store.getters['palette/getTitle'];
		},
		set(v: string) {
			this.$store.dispatch('palette/setTitle', v);
		}
	};

	setColor(hex: string): void {
		this.$store.dispatch('current/setHex', hex);
	}

	removeColor(hex: string): void {
		this.$store.dispatch('palette/removeColorByHex', hex);
	}
}
