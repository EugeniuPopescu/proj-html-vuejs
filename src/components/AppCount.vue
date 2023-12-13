<script>

import { store } from "../store.js" //state management

export default {
    name: "AppCount",
    data() {
        return {
            store
        }
    },
    mounted() {
        console.log("Componente AppCount caricato");
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <!-- top shape -->
        <div class="top-shape">
            <img src="/public/assets/shape-top.png" alt="">
        </div>

        <div class="container">
            <div class="text-center">
                <h2>Anidio Quick Facts</h2>
            </div>
            
            <div class="row">
                <div v-for="count in store.counts" class="col-3">
                    <div class="box">
                        <h2>{{ count.number }}</h2>
                        <p>{{ count.text }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- globe -->
        <div class="globe">
            <img src="/public/assets/globe.png" alt="">
        </div>

        <!-- bottom shape -->
        <div class="bottom-shape">
            <img src="/public/assets/shape-bottom.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    margin-top: 4rem;
    padding: 7rem 0;
    background: url("/public/assets/counter-bg.png");
    background-size: cover;
    position: relative;
    overflow: hidden;
}

.top-shape {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 5;
    overflow: hidden;
}

.bottom-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 100%;
    overflow: hidden;
}

.globe {
    position: absolute;
    left: 50%;
    top: 50%;
    max-width: 30rem;
    height: 30rem;
    animation: coun 30s linear infinite;
    animation-delay: 0.3s;
    overflow: hidden;
    transform: translate(-50%, -50%);
    z-index: 0;
}

.globe img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

h2 {
    position: relative;
    z-index: 2;

    font-size: 3rem;
    font-weight: 700;
    color: #ffffff;
}

.box {
    text-align: center;
    border: 1px solid lightgray;
    border-radius: 20px;
    padding: 45px 20px;
    position: relative;
    transition: all 0.3s;
    z-index: 9;
}

.box:hover {
    transform: skewY(4deg);
}

p {
    color: #ff7a1f;
}
</style>
