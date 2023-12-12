<script>
import AppAnimation from '../components/AppAnimation.vue';
import AppCount from '../components/AppCount.vue';
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    components: {
    AppAnimation,
    AppCount
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

</template>

<style scoped lang="scss">
// importo variabili
// @use './styles/partials/variables' as *;

// ...qui eventuale SCSS di PageMain
</style>