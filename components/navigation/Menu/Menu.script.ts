import { Vue, Component, Watch } from 'vue-property-decorator';

@Component<Menu>({
	name: 'Menu'
})
export default class Menu extends Vue {
	// routes: any = (this as any).$router.options.routes;

	public get nav(): any {
		return (this as any).$router.options.routes
			.filter((route: any) => !route.path.includes(':'))
			.filter((route: any) => !route.path.includes('404'))
			.filter((route: any) => !route.path.substring(1).includes('/'))
			.filter((route: any) => route.name !== 'index')
			.map((route: any) => {
				return {
					name: route.name,
					path: route.path,
					children: (this as any).$router.options.routes
						.filter((route: any) => !route.path.includes(':'))
						.filter(
							(subroute: any) =>
								subroute.path.indexOf(route.name) > 0 &&
								subroute.path !== route.path
						)
						.map((subroute: any) => {
							return {
								name: subroute.name.substr(route.name.length + 1),
								path: subroute.path
							};
						})
				};
			});
	}

	public get menuActive(): boolean {
		return this.$store.state.ui.menu.active;
	}

	public set menuActive(value: boolean) {
		this.$store.dispatch('ui/setMenuActive', value);
	}

	@Watch('$route')
	onPropertyChanged() {
		this.$store.dispatch('ui/setMenuActive', false);
	}
}
