User
<template>
    <div>
        <div class="container-fluid vh-100 background">
            <div class="row">
                <div class="col">
                    <h1 class="text">Ciao sono Francesco un
                        <span id="typed"></span>
                    </h1>
                </div>
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
};
</script>
  
<style lang="scss" scoped>
.text {
    color: red;
    font-size: 90px;
}


.background {
    background-color: #211E2A;
}

#typed::after {
    content: '|';
    display: inline;
    -webkit-animation: blink 0.7s infinite;
    -moz-animation: blink 0.7s infinite;
    animation: blink 0.7s infinite;
}

#typed {
    color: blue;
    font-size: 90px;
}
</style>