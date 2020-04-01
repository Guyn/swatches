import { Vue, Component } from 'vue-property-decorator';
@Component<Trigger>({
	name: 'Trigger'
})
export default class Trigger extends Vue {
	public get menuActive(): boolean {
		return this.$store.state.ui.menu.active;
	}

	public set menuActive(value: boolean) {
		this.$store.dispatch('ui/setMenuActive', value);
	}
}
