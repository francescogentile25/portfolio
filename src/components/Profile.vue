<template>
    <div class="container d-flex background" style="height: 100vh;">
        <div class="row d-flex">
            <div class=" col-12 col-sm-5 d-flex align-items-center">
                <img src="../assets/profile-picture.png" alt="">
            </div>
            <div class=" col-12 col-sm-7 d-flex align-items-center justify-content-start">

                <h1 class="text">Ciao sono Francesco un
                    <br>
                    <span id="typed"></span>
                </h1>

            </div>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js';
export default {
    mounted() {
        const options = {
            strings: [
                'Front-End Developer',
                'Back-End Developer',
                'Full Stack Developer',
            ],
            typeSpeed: 100,
            startDelay: 0,
            backSpeed: 60,
            backDelay: 1000,
            loop: true,
            cursorChar: '|',
            contentType: 'html'
        };

        const typed = new Typed('#typed', options);
    }
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;

img {
    max-width: 100%;
}

.text {
    color: $white;
    font-size: 5vh;
    text-align: center;
}

#typed {
    color: $secondary;
}


a {
    color: $white;
}
</style>