import { Vue, Component } from 'vue-property-decorator';
import Menu from '@/components/navigation/Menu';
import Trigger from '@/components/navigation/Trigger';

@Component<Header>({
	name: 'Header',
	components: {
		Trigger,
		Menu
	}
})
export default class Header extends Vue {
	projectName: string = 'Hi!';
}
