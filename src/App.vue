<script>
import PageHeader from "./components/PageHeader.vue"
import PageMain from "./components/PageMain.vue"
import PageFooter from "./components/PageFooter.vue"

import { store } from "./store.js" //state management

export default {
	components: {
		PageHeader,
		PageMain,
		PageFooter
	},
	data() {
		return {
			store
		}
	},
	mounted() {
		this.doThings();
	},
	methods: {
		doThings() {
			console.log("App.vue does things");
		}
	}
}
</script>

<template>
	<header>
		<PageHeader />
	</header>

	<main>
		<PageMain />
	</main>

	<header>
		<PageFooter />
	</header>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di App.vue
main {
	padding: 1rem;
}
</style>