<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    name: "SwiperClient",
    components: {
        Swiper,
        SwiperSlide,
    },
    data() {
        return {
            modules: [Autoplay, Navigation]
        };
    },
};
</script>


<template>
    <swiper :slidesPerView="6" :spaceBetween="2" :loop="true" :autoplay="{ delay: 2000, disableOnInteraction: false }" :modules="modules">
        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor1.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor2.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor3.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor4.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor5.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor6.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor1.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor2.png" alt="">
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/sponsor3.png" alt="">
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<style scoped lang="scss">
.swiper-slide {
    img {
        width: 9rem;
    }
}
</style>

  
