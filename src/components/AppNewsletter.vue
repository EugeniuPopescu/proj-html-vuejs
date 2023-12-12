<script>
export default {
    name: "AppCount",
    data() {
        return {
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
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-6">
                    <div class="text-center">
                        <h5 class="fw-semibold">We Create New Worlds!</h5>
                        <h2 class="fw-bold">Want Tips On Your Storytelling?</h2>
                        <p>Join our newsletter for tips on how to elevate your brand through storytelling</p>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-6 input">
                    <div class="my-3 position-relative d-flex justify-content-end align-items-center">
                        <input type="email" class="form-control rounded-pill py-3" id="exampleFormControlInput1" placeholder="Eneter your email" required>
                        <button class="btn rounded-pill fw-semibold mx-2">Submit</button>
                    </div>
                </div>
            </div>
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
    z-index: 2;
    overflow: hidden;
}

.bottom-shape {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    overflow: hidden;
}

h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
}

h5 {
    color: #ff7a1f;
}

p {
    color: white;
}

.btn {
    position: absolute;
    width: 20%;
    height: 80%;
    z-index: 1;
    background-color: #ffdfed;
    transition: all 0.3s;
}

.btn:hover {
    border: 1px solid #ffdfed;
}

</style>
