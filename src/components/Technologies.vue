<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="title mb-5">Le mie <span class="skill">skill</span></h1>
                    <div class="icon-card-container">
                        <div class="row justify-content-center">
                            <div class="col-6 col-md-4 col-lg-3  " v-for="image in images">
                                <img class="icon" :src="image.src" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                {
                    id: 1,
                    src: "/src/assets/icon/html-icon.svg"
                },
                {
                    id: 2,
                    src: "/src/assets/icon/css-icon.svg"
                },
                {
                    id: 3,
                    src: "/src/assets/icon/bootstrap-5-logo-icon.svg"
                },
                {
                    id: 4,
                    src: "/src/assets/icon/javascript-programming-language-icon.svg"
                },
                {
                    id: 5,
                    src: "/src/assets/icon/vue-js-icon.svg"
                },
                {
                    id: 6,
                    src: "/src/assets/icon/php-programming-language-icon.svg"
                },
                {
                    id: 7,
                    src: "/src/assets/icon/laravel-icon.svg"
                },
                {
                    id: 8,
                    src: "/src/assets/icon/mysql-icon.svg"
                },
                {
                    id: 9,
                    src: "/src/assets/icon/sass-icon.svg"
                },



            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;

.container-fluid {
    background-color: $primary;
    height: 100vh;
}

.icon-card {
    display: flex;
    justify-content: center;
    gap: 30px;
}

.icon {
    filter: grayscale(1);

    &:hover {
        filter: grayscale(0);
        transition: 600ms;
    }
}

.title {
    color: $white;
    text-align: center;
}

.skill {
    color: $secondary
}
</style>