<script>
import { store } from "../store.js" //state management
import register from "../debug" //per debuggare il componente da console

export default {
    name: "PageFooter",
    data() {
        return {
            store
        }
    },
    methods: {
        doThings() {
            console.log("PageFooter does things");
        }
    },
    mounted() {
        register(this); //per debuggare il componente da console
        this.doThings();
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <div class="container">
            <!-- footer top -->
            <div class="row">
                <!-- logo -->
                <div class="col-6">
                    <a href=".">
                        <img src="/assets/footer-logo.png" alt="">
                    </a>
                </div>
                <!-- links -->
                <div class="col-6">
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
                    </ul>
                </div>
            </div>

            <hr>
            <!-- footer bottom -->
            <div class="row my-4 d-flex justify-content-between align-items-center">
                <!-- logo -->
                <div class="col-6">
                    <span>Copyright © 2022 <a href="https://www.templatemonster.com/authors/softivus/">Softivus.</a> All rights reserved.</span>
                </div>
                <!-- links -->
                <div class="col-6 d-flex justify-content-end">
                    <font-awesome-icon class="icon" icon="fa-brands fa-facebook" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
                    <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding-top: 7rem;
}

li {
    list-style: none;
    text-decoration: none;
}

a {
    text-decoration: none;
    font-weight: 600;
    color: black;
}

a:hover {
    color: #4d36dc;
}

.icon {
    border: 1px solid lightgray;
    border-radius: 50%;
    padding: 0.8rem;
    color: #4d36dc;
    margin: 0 0.3rem;
    font-size: larger;
}

.icon:hover {
    background-color: #ff7a1f;
    color: white;
    border: none;
    transition: 0.3s;
}

</style>