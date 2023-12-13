<script>
import SwiperTeam from '../components/SwiperTeam.vue';

export default {
    name: "AppTeam",
    components: {
        SwiperTeam
    },
    data() {
        return {
        }
    },
    mounted() {
        console.log("Componente AppTeam caricato");
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-6 text-center">
                    <h4 class="fw-semibold">Anidio Magic Team Member</h4>
                    <h2>Let Us Animate Your Project</h2>
                    <p>We create new worlds!Let’s collaborate and create engaging, effective, award-winning animations</p>
                </div>
            </div>
            <!-- team -->
            <div class="row">
                <SwiperTeam />
            </div>
        </div>
    </div>
</template>

<style scoped>
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
