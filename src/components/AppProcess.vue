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
            <div class="row d-flex justify-content-between align-items-center">
                <div class="col-5">
                    <div class="box-img">
                        <img src="/assets/process-thumb.png" alt="">
                    </div>
                </div>
                <div class="col-6">
                    <!-- titles row -->
                    <div class="row">
                        <div class="col-12">
                            <div class="text-left">
                                <h5 class="fw-semibold">Our Process</h5>
                                <h2 class="fw-bold">Our Process for Your Animation Production</h2>
                                <p>We have an effective process for working on animation</p>
                            </div>
                        </div>
                    </div>
    
                    <!-- card -->
                    <div class="row">
                        <!-- box1 -->
                        <div class="col-4">
                            <div class="box text-center py-3 px-3">
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
                            <div class="box text-center py-3 px-3">
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
                            <div class="box text-center py-3 px-3">
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
        
        <!-- rocket -->
        <div class="rocket">
            <img src="/public/assets/smart4.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 7rem 0;
}

h5 {
    color: #4d36dc;
}

h2 {
    font-size: 3rem;
    color: #311852;
}

.box-img {
    direction: rtl;
    width: unset;
    transition: all 0.5s;
}
.box-img:hover {
  transform: translateX(20px);
}

.box-img img {
    width: 50rem;
}
.box {
    border: 1px solid lightgrey;
    border-radius: 40px;
    padding: 35px 15px;
    background-color: white;
    transition: all 0.3s;
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
