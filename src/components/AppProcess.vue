<script>
import SwiperProcess from '../components/SwiperProcess.vue';

export default {
    name: "AppAnimation",
    components: {
        SwiperProcess
    },
    data() {
        return {
        }
    },
    mounted() {
        console.log("Componente AppAnimation caricato");
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <div class="container">
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-5">
                    <div class="box-img">
                        <img src="/assets/process-thumb.png" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <!-- titles row -->
                    <div class="row">
                        <div class="col-12">
                            <div class="text-left">
                                <h5 class="fw-semibold">Our Process</h5>
                                <h2 class="fw-bold">Our Process for Your Animation Production</h2>
                                <p>We have an effective process for working on animation</p>
                            </div>
                        </div>
                    </div>

                    <!-- card -->
                    <div class="row">
                        <SwiperProcess />
                    </div>
                    
                </div>
            </div>

        </div>
        
        <!-- rocket -->
        <div class="rocket">
            <img src="/public/assets/smart4.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 7rem 0;
}

h5 {
    color: #4d36dc;
}

h2 {
    font-size: 3rem;
    color: #311852;
}

.box-img {
    direction: rtl;
    width: unset;
    transition: all 0.5s;
}
.box-img:hover {
  transform: translateX(20px);
}

.box-img img {
    width: 50rem;
}
.box {
    border: 1px solid lightgrey;
    border-radius: 40px;
    padding: 35px 15px;
    background-color: white;
    transition: all 0.3s;
} 



.rocket {
    position: absolute;
    z-index: -2;
    right: 0;
    bottom: 0;
    width: 8rem;
    height: 8rem;
}
.rocket img {
    width: 100%;
    height: 100%;
}
</style>
