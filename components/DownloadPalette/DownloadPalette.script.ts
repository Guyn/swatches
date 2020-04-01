import { Vue, Component } from 'vue-property-decorator';

@Component<DownloadPalette>({
	name: 'DownloadPalette'
})
export default class DownloadPalette extends Vue {
	// State
	status: string = 'idle';

	// Computed
	valid(): boolean {
		return this.$store.getters['current/getValid'];
	}

	hasSwatches: any = this.$store.getters['palette/getSwatches'].length > 0;

	// Methods
	download(): void {
		this.status = 'loading';
	}
}
