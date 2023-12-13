<script>
import { store } from '../store';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    name: "SwiperProcess",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            store,
            modules: [Autoplay, Navigation]
        };
    },
};
</script>


<template>
    <swiper :slidesPerView="2" :spaceBetween="2" :loop="true" :autoplay="{ delay: 2000, disableOnInteraction: false }" :modules="modules">
        
        <swiper-slide v-for="box in store.processBoxs" class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img :src="box.src" alt="">
                </div>
                <!-- content -->
                <div>
                    <h4>{{ box.title }}</h4>
                    <p>{{ box.text }}</p>
                </div>
                <span class="badge d-flex justify-content-center align-items-end py-3">{{ box.badge }}</span>
            </div>
        </swiper-slide>
    </swiper>
</template>
<style scoped lang="scss">
.swiper-slide {
    .box {
        border: 1px solid lightgrey;
        border-radius: 30px;
        background-color: white;
        transition: all 0.3s;
        height: 18rem;
        margin: 0 0.7rem;
    } 

    img {
        width: 5rem;
    }

    .badge{
        background: #ffdfed;
        color: black;
        width: 3rem;
        height: 5rem;
        font-size: 1rem;
        border-radius: 0 0 100px 100px;
        position: absolute;
        top: 0;
        right: 15%;
    }
}
</style>

  
