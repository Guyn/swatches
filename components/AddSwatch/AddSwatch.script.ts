import { Vue, Component } from 'vue-property-decorator';

type colorTypes = 'hex' | 'hsl' | 'rgb';

@Component<AddSwatch>({
	name: 'AddSwatch'
})
export default class AddSwatch extends Vue {
	private colorType: colorTypes = 'hex';

	// Computed
	public get valid(): boolean {
		return this.$store.getters['current/getValid'];
	}

	/*
	 *   HEX
	 */
	public get hex(): string {
		return this.$store.getters['current/getHex'];
	}

	public set hex(value: string) {
		this.$store.dispatch('current/setHex', value);
	}

	/*
	 *   HSL
	 */

	// Hue
	public get hue(): number {
		return this.$store.getters['current/getHue'];
	}

	public set hue(value: number) {
		this.$store.dispatch('current/setHue', value);
	}

	// // Saturation
	public get saturation(): number {
		return this.$store.getters['current/getSaturation'];
	}

	public set saturation(value: number) {
		this.$store.dispatch('current/setSaturation', value);
	}

	// Lightness
	public get lightness(): number {
		return this.$store.getters['current/getLightness'];
	}

	public set lightness(value: number) {
		this.$store.dispatch('current/setLightness', value);
	}

	/*
	 *  RGB
	 */

	// Red
	public get red(): number {
		return this.$store.getters['current/getRed'];
	}

	public set red(value: number) {
		this.$store.dispatch('current/setRed', value);
	}

	// Green
	public get green(): number {
		return this.$store.getters['current/getGreen'];
	}

	public set green(value: number) {
		this.$store.dispatch('current/setGreen', value);
	}

	// Blue
	public get blue(): number {
		return this.$store.getters['current/getBlue'];
	}

	public set blue(value: number) {
		this.$store.dispatch('current/setBlue', value);
	}

	/*
	 *   COLORS
	 */

	// Color
	public get color(): any {
		return this.$store.getters['current/getColor'];
	}
	// Methods:

	addColor(): void {
		if (this.valid) this.$store.dispatch('palette/addColor', this.color);
	}
}
