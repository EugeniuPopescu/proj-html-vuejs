<script>
import ClientSwiper from '../components/ClientSwiper.vue';

export default {
    name: "AppClient",
    components: {
        ClientSwiper
    },
    data() {
        return {
        }
    },
    mounted() {
        console.log("Componente AppClient caricato");
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-6 text-center">
                    <h4 class="fw-semibold">Why Anidio studio?</h4>
                    <h2>We Love Our Clients</h2>
                    <p>We are trusted throughout adland and have a wealth of recommendations from start-ups to renowned global brands.</p>
                </div>
            </div>
            <!-- team -->
            <div class="row">
                <ClientSwiper />
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding-top: 7rem;
}

h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #311852;
}

h4 {
    color: #4d36dc;
}

p {
    color: #311852;
}

</style>
