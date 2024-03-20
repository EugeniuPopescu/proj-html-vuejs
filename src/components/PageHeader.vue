<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "PageHeader",
    props: {
        txtLinks: Object
    },
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("PageHeader does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div class="bg">
        <div class="container">
            <!-- header -->
            <div class="row py-3 header-fixed">
                <!-- logo -->
                <div class="col-3">
                    <a href=".">
                        <img src="/assets/logo.png" alt="">
                    </a>
                </div>
                <!-- links -->
                <div class="col-9">
                    <ul class="d-flex justify-content-end align-items-center relative">
                        <li>
                            <a class="mx-2" v-for="link in txtLinks" :href="link.href">{{ link.text }}</a>
                        </li>
                        <li>
                            <a href="https://pixner.net/anidio/carton-agency/quote.html">
                                <button class="btn" type="button">Get a Quote</button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <!-- Jumbo -->
            <section class="jumbo relative">
                <!-- astronauts -->
                <div class="astronaut1">
                    <img class="astronauts" src="/public/assets/left-man.png" alt="">
                </div>

                <div class="astronaut2">
                    <img class="astronauts" src="/public/assets/right-man.png" alt="">
                </div>

                <!-- stars -->
                <!-- stars-left -->
                <div class="stars-left">
                    <img src="/public/assets/dots-left.png" alt="dots-left">
                </div>
                <!-- stars-right -->
                <div class="stars-right">
                    <img src="/public/assets/dots-right.png" alt="dots-left">
                </div>

                <!-- globs -->
                <!-- globe1 -->
                <div class="globe1">
                    <img src="/public/assets/globe1.png" alt="dots-left">
                </div>

                <!-- globe2 -->
                <div class="globe2">
                    <img src="/public/assets/globe2.png" alt="dots-left">
                </div>

                <!-- globe3 -->
                <div class="globe3">
                    <img src="/public/assets/globe3.png" alt="dots-left">
                </div>

                <!-- spaceX -->
                <div class="spaceX">
                    <img src="/public/assets/light.png" alt="dots-left">
                </div>

                <!-- center text of jumbotron -->
                <div class="row d-flex justify-content-center ">
                    <div class="col-9 position">
                        <!-- text -->
                        <div class="text-center text-white">
                            <span class="jumbo-span fw-semibold fs-4">Imagine, Create, Experience</span>
                            <h1>We Animate</h1>
                            <h1>With Ninja-Like Precision</h1>
                            <p class="fs-5">We are a character-driven animation studio striving to make high-quality
                                animations.</p>
                        </div>
                        <!-- btn -->
                        <div class="text-center py-3">
                            <a class="px-3" href="#StartAProject">
                                <button class="btn" type="button">Start A Project</button>
                            </a>
                            <a class="px-3" href="#Portfolio">
                                <button class="btn1" type="button">Portfolio</button>
                            </a>
                        </div>

                        <!-- middle banner video -->
                        <div class="middle-banner pt-5">
                            <img src="/public/assets/middle.png" alt="">
                            <!-- play btn -->
                            <a href="https://www.youtube.com/watch?v=wYeFAlVC8qU"
                                class="play-btn d-flex justify-content-center align-items-center">
                                <font-awesome-icon class="play" icon="play" />
                            </a>
                        </div>

                    </div>

                </div>
                <!-- white shape -->
                <div class="shape">
                    <img src="/public/assets/bottom-shape.png" alt="">
                </div>

            </section>
        </div>
    </div>
</template>

<style scoped lang="scss">
// header fixed
.menu-fixed {
    position: sticky;
    top:0;
    padding:40px;
    background: lightblue;
    text-align: center;
}

li {
    list-style: none;
    text-decoration: none;
    position: relative;
    z-index: 1;
}

a {
    text-decoration: none;
    font-weight: 600;
    color: white;
}

a:hover {
    color: #ff7a1f;
}

a .btn {
    border-radius: 100px;
    font-weight: 600;
    transition: all 0.5s;
    box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
    color: black;
    background: #ffdfed;
    padding: .7rem 2rem;
}

a .btn:hover {
    border-radius: 100px;
    border: 1px solid white;
    font-weight: 600;
    transition: all 0.5s;
    box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
    color: white;
    background-color: rgba(128, 0, 128, 0);
    padding: .7rem 2rem;
}

.btn1 {
    border-radius: 100px;
    border: 1px solid white;
    font-weight: 600;
    transition: all 0.5s;
    box-shadow: 0px 8px 18px 0px rgba(109, 100, 139, 0.61);
    color: white;
    background-color: rgba(128, 0, 128, 0);
    padding: .7rem 2rem;
}

.btn1:hover {
    background-color: #ffdfed;
    color: #a616ea;
} 
/************* jumbotron **************/
.jumbo {
    padding-top: 3rem;
}

.bg {
    background-image: url(/assets/banner-bg.png);
    background-size: cover;
    position: relative;
    margin-bottom: 200px;
    height: 50rem;
}

.position {
    position: relative;
    z-index: 5;
}

// img background
// astronauts
@keyframes floating {
    0% {
        transform: translate(0, 0px);
    }

    50% {
        transform: translate(0, 30px);
    }

    100% {
        transform: translate(0, -0px);
    }
}

.astronaut1 {
    position: absolute;
    z-index: 1;
    top: 30%;
    left: 3%;
    max-width: 10rem;
    height: 1rem;
    animation: floating 3s ease-in-out infinite
}

.astronaut2 {
    position: absolute;
    z-index: 1;
    right: 3%;
    top: 30%;
    animation: 4s linear infinite;
    animation-delay: 0.5s;
    animation: floating 4s ease-in-out infinite
}

.astronauts {
    width: 15rem;
    height: 25rem;
}

// stars
.stars-left {
    position: absolute;
    top: 10%;
    left: 5%;
}

.stars-right {
    position: absolute;
    top: 10%;
    right: 1%;
    max-width: 750px;
    overflow: hidden;
}

// globs
// globe1
@keyframes rotation {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(359deg);
    }
}

.globe1 {
    position: absolute;
    top: 10%;
    left: 3%;
    animation: rotation 4s infinite linear;
}

.globe1 img {
    width: 7rem;
}

// globe2
.globe2 {
    position: absolute;
    top: 20%;
    right: 25%;
    animation: rotation 5s infinite linear;
}

.globe2 img {
    width: 5rem;
}

// globe3
.globe3 {
    position: absolute;
    top: -18%;
    right: 45%;
}

.globe3 img {
    width: 15rem;
}

// spaceX
@keyframes floating1 {
    0% {
        transform: rotate(-10deg);
    }

    50% {
        transform: rotate(30deg);
    }

    100% {
        transform: rotate(-10deg);
    }
}

.spaceX {
    position: absolute;
    top: 12%;
    right: 3%;
    animation: floating1 5s ease-in-out infinite;
}

.spaceX img {
    width: 5rem;
}

// text center
.jumbo-span {
    color: #ff7a1f;
}

h1 {
    font-size: 4rem;
    font-weight: 700;
}

.middle-banner {
    z-index: 9;
    width: 100%;
    position: relative;
}

// video

.play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #a616ea;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    animation: video 2s linear infinite;
}

/* triangle */
.play-btn::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translateX(-40%) translateY(-50%);
    transform: translateX(-40%) translateY(-50%);
    transform-origin: center center;
    width: 0;
    height: 0;
    border-top: 15px solid transparent;
    border-bottom: 15px solid transparent;
    border-left: 25px solid #fff;
}

/* pulse wave */
.play-btn:before {
    content: "";
    position: absolute;
    width: 7.5rem;
    height: 7.5rem;
    -webkit-animation: pulsate1 2s;
    animation: pulsate1 2s;
    animation-iteration-count: infinite;
    opacity: 0;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, .75);
}

@-webkit-keyframes pulsate1 {
    0% {
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
        opacity: 1;
        box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
    }

    100% {
        -webkit-transform: scale(1);
        transform: scale(1);
        opacity: 0;
        box-shadow: none;

    }
}

@keyframes pulsate1 {
    0% {
        -webkit-transform: scale(0.6);
        transform: scale(0.6);
        opacity: 1;
        box-shadow: inset 0px 0px 25px 3px rgba(255, 255, 255, 0.75), 0px 0px 25px 10px rgba(255, 255, 255, 0.75);
    }

    100% {
        -webkit-transform: scale(1, 1);
        transform: scale(1);
        opacity: 0;
        box-shadow: none;

    }
}

.middle-banner img {
    width: 100%;
    height: 100%;
}

.shape {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10.5rem;
}

.shape img {
    width: 100%;
    height: 110%;
}</style>