<script>
export default {
    name: "AppAnimation",
    data() {
        return {
        }
    },
    mounted() {
        console.log("Componente AppAnimation caricato");
    }
}
</script>

<template>
    <div class="wrapper position-relative">
        <div class="container">
            <div class="row">
                <div class="col-9 offset-3">
                    <!-- titles row -->
                    <div class="row">
                        <div class="col-9">
                            <div class="text-center">
                                <h5 class="fw-semibold">Our Love For Animation</h5>
                                <h2 class="fw-bold">We're Storytelling Experts With Creative Smarts</h2>
                                <p>Our culture inspires the creative and innovative spirit found throughout our Studio. We breathe life into new ideas!</p>
                            </div>
                        </div>
                    </div>
    
                    <!-- card -->
                    <div class="row">
                        <!-- box1 -->
                        <div class="col-4">
                            <div class="box1 text-center py-3 px-3">
                                <!-- img -->
                                <div class="py-3">
                                    <img src="/public/assets/smart1.png" alt="">
                                </div>
                                <!-- content -->
                                <div>
                                    <h4>3D modeling</h4>
                                    <p>We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.</p>
                                </div>
                            </div>
                        </div>
                        <!-- box2 -->
                        <div class="col-4">
                            <div class="box2 text-center py-3 px-3">
                                <!-- img -->
                                <div class="py-3">
                                    <img src="/public/assets/smart2.png" alt="">
                                </div>
                                <!-- content -->
                                <div>
                                    <h4>Collaboration</h4>
                                    <p>We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.</p>
                                </div>
                            </div>
                        </div>
                        <!-- box3 -->
                        <div class="col-4">
                            <div class="box3 text-center py-3 px-3">
                                <!-- img -->
                                <div class="py-3">
                                    <img src="/public/assets/smart3.png" alt="">
                                </div>
                                <!-- content -->
                                <div>
                                    <h4>Creativity</h4>
                                    <p>We constantly ask questions. It helps us shape your story and deliver the results you crave. Yep, we'll drill deep to deliver above and beyond your expectations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
        <!-- 3dBoy -->
        <div class="smart">
            <img src="/public/assets/smart.png" alt="">
        </div>
        <!-- rocket -->
        <div class="rocket">
            <img src="/public/assets/smart4.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 10rem 0;
}

h5 {
    color: #4d36dc;
}

h2 {
    font-size: 3rem;
    color: #311852;
}

img {
    width: 4rem;
}
.box1 {
    border: 1px solid lightgrey;
    border-radius: 40px;
    padding: 35px 15px;
    background-color: white;
    transition: all 0.3s;
    box-shadow: 0px 8px 18px 0px rgba(246, 243, 255, 0.61);
    background-image: -webkit-linear-gradient(90deg, rgba(255, 122, 31, 0.10196) 0%, rgba(1, 5, 48, 0) 100%);
} 

.box1:hover {
  border: 1px solid white;
  background-image: -webkit-linear-gradient(90deg, rgba(1, 5, 48, 0) 0%, rgba(255, 122, 31, 0.10196) 100%);
}

.box2 {
    border: 1px solid lightgrey;
    border-radius: 40px;
    padding: 35px 15px;
    background-color: white;
    transition: all 0.3s;
    background-image: -webkit-linear-gradient(90deg, rgba(77, 54, 220, 0.10196) 0%, rgba(1, 5, 48, 0) 100%);
    box-shadow: 0px 8px 18px 0px rgba(246, 243, 255, 0.61);
} 

.box2:hover {
  border: 1px solid white;
  background-image: -webkit-linear-gradient(90deg, rgba(1, 5, 48, 0) 0%, rgba(77, 54, 220, 0.10196) 100%);
}

.box3 {
    border: 1px solid lightgrey;
    border-radius: 40px;
    padding: 35px 15px;
    background-color: white;
    transition: all 0.3s;
    background-image: -webkit-linear-gradient(90deg, rgba(255, 0, 15, 0.10196) 0%, rgba(1, 5, 48, 0) 100%);
    box-shadow: 0px 8px 18px 0px rgba(246, 243, 255, 0.61);
} 

.box3:hover {
  border: 1px solid white;
  background-image: -webkit-linear-gradient(90deg, rgba(1, 5, 48, 0) 0%, rgba(255, 0, 15, 0.10196) 100%);
}

.smart {
    position: absolute;
    z-index: -2;
    left: 0;
    top: 0;
    max-width: 60rem;
    height: 60rem;
}

.smart img {
    width: 100%;
    height: 100%;
}

.rocket {
    position: absolute;
    z-index: -2;
    right: 0;
    bottom: 0;
    width: 8rem;
    height: 8rem;
}
.rocket img {
    width: 100%;
    height: 100%;
}
</style>
