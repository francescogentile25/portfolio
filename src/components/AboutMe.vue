<template>
    <div class="container-fluid d-flex align-items-center" id="aboutMe">
        <div class="container ">
            <div class="text text-center">
                <h1 class="watch">Su di me</h1>
                <p class="lh-lg watch">
                    Ciao! Sono Francesco, un Jr. full-stack web developer con una spiccata passione per la
                    tecnologia e la programmazione. Sono una persona altamente motivato. Credo che l'apprendimento sia un
                    processo continuo e cerco costantemente di rimanere aggiornato sulle ultime tendenze del settore.</p>
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

.text {
    color: $white;

    h1 {
        color: $secondary;
    }
}

.container-fluid {
    background-color: $primary;
    height: 100vh;
}
</style>