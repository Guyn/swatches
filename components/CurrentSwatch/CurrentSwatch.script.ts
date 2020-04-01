import { Vue, Component } from 'vue-property-decorator';

@Component<CurrentSwatch>({
	name: 'CurrentSwatch'
})
export default class CurrentSwatch extends Vue {
	// Computed
	valid(): boolean {
		return this.$store.getters['current/getValid'];
	}

	// Hue
	public get hex(): number {
		return this.$store.getters['current/getHex'];
	}

	// Hue
	public get hue(): number {
		return Math.round(this.$store.getters['current/getHue']);
	}

	public set hue(value: number) {
		this.$store.dispatch('current/setHue', value);
	}

	// Saturation
	public get saturation(): number {
		return Math.round(this.$store.getters['current/getSaturation']);
	}

	public set saturation(value: number) {
		this.$store.dispatch('current/setSaturation', value);
	}

	// Lightness
	public get lightness(): number {
		return Math.round(this.$store.getters['current/getLightness']);
	}

	// Red
	public get red(): number {
		return Math.round(this.$store.getters['current/getRed']);
	}

	// Green
	public get green(): number {
		return Math.round(this.$store.getters['current/getGreen']);
	}

	// Blue
	public get blue(): number {
		return Math.round(this.$store.getters['current/getBlue']);
	}

	public set lightness(value: number) {
		this.$store.dispatch('current/setLightness', value);
	}
}
