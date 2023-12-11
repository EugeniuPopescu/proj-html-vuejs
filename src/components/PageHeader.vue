<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "PageHeader",
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
            <div class="row py-3">
                <!-- logo -->
                <div class="col-3">
                    <a href=".">
                        <img src="/assets/logo.png" alt="">
                    </a>
                </div>
                <!-- links -->
                <div class="col-9">
                    <ul class="d-flex justify-content-between align-items-center relative">
                        <li>
                            <a href="#Home">Home</a>
                        </li>
                        <li>
                            <a href="#AboutUs">About Us</a>
                        </li>
                        <li>
                            <a href="#Portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#OurProcess">Our Process</a>
                        </li>
                        <li>
                            <a href="#Pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="#Blog">Blog</a>
                        </li>
                        <li>
                            <a href="#Contact">Contact</a>
                        </li>
                        <li>
                            <a href="#getAQuote">
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

                <!-- 
                    globs 
                -->
                

                <div class="row d-flex justify-content-center">
                    <div class="col-9 position-relative">
                        <div class="text-center text-light z-99">
                            <span class="jumbo-span fw-semibold fs-4">Imagine, Create, Experience</span>
                            <h1>We Animate</h1>
                            <h1>With Ninja-Like Precision</h1>
                            <p class="fs-5">We are a character-driven animation studio striving to make high-quality animations.</p>
                        </div>
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

<style scoped lang="scss">// importo variabili

li {
    list-style: none;
    text-decoration: none;
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
    background: rgba(255, 255, 255, 0.8);
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

.astronaut1 {
    position: absolute;
    top: 30%;
    left: 3%;
    max-width: 10rem;
    height: 1rem;
}


.astronaut2 {
    position: absolute;
    right: 3%;
    top: 30%;
    animation: 4s linear infinite;
    animation-delay: 0.5s;
}

.astronauts {
    width: 15rem;
    height: 25rem;
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
    z-index: 99;
    width: 100%;
    position: relative;
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
    height: 10rem;
}

.shape img {
    width: 100%;
    height: 100%;
}
</style>