<script>
import AppAnimation from '../components/AppAnimation.vue';
import AppCount from '../components/AppCount.vue';
import AppWork from '../components/AppWork.vue';
import AppProcess from '../components/AppProcess.vue';
import AppTeam from '../components/AppTeam.vue';
import AppClient from '../components/AppClient.vue';
import AppNewsletter from '../components/AppNewsletter.vue';

import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    components: {
    AppAnimation,
    AppCount,
    AppWork,
    AppProcess,
    AppTeam,
    AppClient,
    AppNewsletter
},
    name: "PageMain",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("PageMain does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <AppAnimation  />
    <AppCount  />
    <AppWork  />
    <AppProcess  />
    <AppTeam  />
    <AppClient  />
    <AppNewsletter />

</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di PageMain
</style>