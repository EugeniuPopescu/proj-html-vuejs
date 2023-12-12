<script>


export default {
    name: "AppWork",
    data() {
        return {
        }
    },
    mounted() {
        console.log("Componente AppWork caricato");
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <div class="container">
            <div class="row justify-content-center mb-4">
                <div class="col-6 text-center">
                    <h4 class="fw-semibold">Our Works</h4>
                    <h2>Featured Productions</h2>
                    <p>Here's just a small sample of some of those projects that we're quite proud of. If you're looking for
                        something specific feel free to get in contact with us.</p>
                </div>
            </div>
            <!-- video -->
            <div class="row">
                <!-- 1 -->
                <div class="col-6">
                    <div class="box">
                        <img src="assets/work1.png" alt="">
                        <div class="video">
                            <a href="https://www.youtube.com/watch?v=yFruBMVvCZQ"
                                class="video-btn d-flex justify-content-center align-items-center">
                                <font-awesome-icon class="video-btn" icon="play" />
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 2 -->
                <div class="col-6">
                    <div class="box">
                        <img src="assets/work2.png" alt="">
                        <div class="video">
                            <a href="https://www.youtube.com/watch?v=yFruBMVvCZQ"
                                class="video-btn d-flex justify-content-center align-items-center">
                                <font-awesome-icon class="video-btn" icon="play" />
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 3 -->
                <div class="col-6 mt-4">
                    <div class="box">
                        <img src="assets/work3.png" alt="">
                        <div class="video">
                            <a href="https://www.youtube.com/watch?v=yFruBMVvCZQ"
                                class="video-btn d-flex justify-content-center align-items-center">
                                <font-awesome-icon class="video-btn" icon="play" />
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 4 -->
                <div class="col-6 mt-4">
                    <div class="box">
                        <img src="assets/work4.png" alt="">
                        <div class="video">
                            <a href="https://www.youtube.com/watch?v=yFruBMVvCZQ"
                                class="video-btn d-flex justify-content-center align-items-center">
                                <font-awesome-icon class="video-btn" icon="play" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- btn -->
            <div class="d-flex justify-content-center my-5">
                <a class="px-3" href="#Work">
                    <button class="btn1" type="button">See Our Work</button>
                </a>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 10rem 0;
}


h2 {
    font-size: 3rem;
    font-weight: 700;
    color: #311852;
}

h4 {
    color: #4d36dc;
}

p {
    color: #311852;
}

.box {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
    position: relative;
    transition: all 0.3s;
}

.box:hover {
    transform: skewX(5deg);
}

.box img {
    width: 100%;
    height: 100%;
    border-radius: 2rem;
}

.box .video {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transform: scale(0);
    visibility: hidden;
    border: 1px solid rgb(227, 228, 237);
    border-radius: 2rem;
    background: rgba(56, 53, 196, 0.25);
    opacity: 0.8;
    width: 100%;
    height: 100%;
    transition: all 0.6s;
}

.box .video .video-btn {
    padding: 1rem;
    width: 2rem;
    height: 2rem;
    line-height: 6rem;
    border-radius: 50%;
    color: #ff7a1f;
    background-color: white;
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
}

.box:hover .video {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
}

.btn1 {
    border-radius: 100px;
    border: 1px solid #ffdfed;
    font-weight: 600;
    transition: all 0.5s;
    color: black;
    background-color: rgba(128, 0, 128, 0);
    padding: .7rem 2rem;
}


</style>
