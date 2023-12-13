<script>
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
            modules: [Autoplay, Navigation]
        };
    },
};
</script>


<template>
    <swiper :slidesPerView="4" :spaceBetween="2" :loop="true" :autoplay="{ delay: 2000, disableOnInteraction: false }" :modules="modules">
        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/team1.png" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>Philippe</h4>
                    <p>CEO</p>
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/team2.png" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>Arthur</h4>
                    <p>Administrator</p>
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/team4.png" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>Gulian</h4>
                    <p>Senior Dev</p>
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/team1.png" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>Chris</h4>
                    <p>Project Lead</p>
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/team2.png" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>Victor</h4>
                    <p>Middle Dev</p>
                    <div class="d-flex justify-content-center">
                        <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
        </swiper-slide>

        <swiper-slide class="text-center">
            <!-- box1 -->
            <div class="box text-center py-3 px-3">
                <!-- img -->
                <div class="box-img py-3">
                    <img src="/public/assets/team4.png" alt="">
                </div>
                <!-- content -->
                <div class="text">
                    <h4>Alex</h4>
                    <p>Team Leader</p>
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

  
