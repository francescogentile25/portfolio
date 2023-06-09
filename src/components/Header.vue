<template>
    <div class="container-fluid">
        <p class="text-bold">Francesco
            <span class="fw-bold">Gentile</span>
        </p>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as *;

p {
    color: $white;
}

.container-fluid {
    padding: 40px;
}
</style>