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
        },
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: "smooth" });
        },

    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
}
</script>

<template>
    <!-- scroll up btn -->
    <div ref="scrollTopButton">
        <button class="scroll d-flex justify-content-center align-items-center" @click="scrollToTop">
            <font-awesome-icon class="p-2" icon="arrow-up" />
        </button>
    </div>
    <AppAnimation />
    <AppCount />
    <AppWork />
    <AppProcess />
    <AppTeam />
    <AppClient />
    <AppNewsletter />
</template>

<style scoped lang="scss">
.scroll {
    background-color: #311852;
    border-radius: .5rem;
    position: fixed;
    right: 1%;
    bottom: 3%;
    z-index: 999;
    color: white;
    border: none;
}

.scroll:hover {
    background-color: #4d36dc;
    transition: all 0.3s;
}
</style>