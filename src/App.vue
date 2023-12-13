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
			store,
			links: [
                {
                    text: "Home",
                    href: "#Home",
                },
                {
                    text: "About Us",
                    href: "#AboutUs",
                },
                {
                    text: "Portfolio",
                    href: "#Portfolio",
                },
                {
                    text: "Our Process",
                    href: "#OurProcess",
                },
                {
                    text: "Pricing",
                    href: "#Pricing",
                },
                {
                    text: "Blog",
                    href: "#Blog",
                },
                {
                    text: "Contact",
                    href: "#Contact",
                },
            ]
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
		<PageHeader :txtLinks="links" />
		
	</header>

	<!-- main -->
	<section>
		<PageMain />
	</section>

	<header>
		<PageFooter :txtLinks="links" />
	</header>
</template>

<style lang="scss">
// importo il foglio di stile generale dell'applicazione, non-scoped
@use './styles/general.scss';
</style>

<style scoped lang="scss">
main {
	padding: 1rem;
}


</style>