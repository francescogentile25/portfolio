<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="container">
            <div class="row">
                <div class="col">
                    <h1 class="title mb-5">Le mie <span class="skill">skill</span></h1>
                    <div class="icon-card-container">
                        <div class="row">
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/html-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/css-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/bootstrap-5-logo-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/javascript-programming-language-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/vue-js-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/php-programming-language-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/laravel-icon.svg" alt="">
                            </div>
                            <div class="col-6 col-md-4 col-lg-3">
                                <img class="icon" src="../assets/icon/mysql-icon.svg" alt="">
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