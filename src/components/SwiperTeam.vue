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
    name: "SwiperTeam",
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
    <swiper :slidesPerView="4" :spaceBetween="2" :loop="true" :autoplay="{ delay: 2000, disableOnInteraction: false }" :modules="modules">
        <swiper-slide v-for="team in store.teamsBoxs" class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img :src="team.src" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>{{ team.name }}</h4>
                    <p>{{ team.mansion }}</p>
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </swiper-slide>
    </swiper>
</template>
<style scoped lang="scss">
.swiper-slide {
    .box {
        border-radius: 30px;
        background-color: #ffdfed;
        transition: all 0.3s;
        margin: 0 0.7rem;
    } 

    .box-img{
        position: relative;
        img {
            width: 9rem;
        }
    }

    .text {
        position: relative;
        z-index: 1;
    }
    .icon {
        border: 1px solid lightgray;
        border-radius: 50%;
        padding: 0.8rem;
        color: #4d36dc;
        margin: 0 0.3rem;
        font-size: larger;
        background-color: white;
    }

    .icon:hover {
        background-color: #ff7a1f;
        color: white;
        border: none;
        transition: 0.3s;
    }
}
</style>

  
