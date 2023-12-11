<script>
import AppJumbo from '../components/AppJumbo.vue';
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    components: {
        AppJumbo,

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
    <AppJumbo  />
</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di PageMain
</style>