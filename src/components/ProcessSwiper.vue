<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';


// import required modules
import { Autoplay, Navigation } from 'swiper/modules';

export default {
    name: "ProcessSwiper",
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
    <swiper :slidesPerView="2" :spaceBetween="2" :loop="true" :autoplay="{ delay: 2000, disableOnInteraction: false }" :modules="modules">
        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/process1.png" alt="">
                </div>
                <!-- content -->
                <div>
                    <h4>Scripting</h4>
                    <p>We’ll take your idea and create a technical script which consists of action notes and animation descriptions</p>
                </div>
                <span class="badge d-flex justify-content-center align-items-end py-3">1</span>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/process2.png" alt="">
                </div>
                <!-- content -->
                <div>
                    <h4>Pre-Production</h4>
                    <p>We’ll take your idea and create a technical script which consists of action notes and animation descriptions</p>
                </div>
                <span class="badge d-flex justify-content-center align-items-end py-3">2</span>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/process1.png" alt="">
                </div>
                <!-- content -->
                <div>
                    <h4>Scripting</h4>
                    <p>We’ll take your idea and create a technical script which consists of action notes and animation descriptions</p>
                </div>
                <span class="badge d-flex justify-content-center align-items-end py-3">3</span>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/process2.png" alt="">
                </div>
                <!-- content -->
                <div>
                    <h4>Pre-Production</h4>
                    <p>We’ll take your idea and create a technical script which consists of action notes and animation descriptions</p>
                </div>
                <span class="badge d-flex justify-content-center align-items-end py-3">4</span>
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

  
