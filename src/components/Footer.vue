<template>
    <footer>
        <div class="footer">
            <div class="icon fs-3 d-flex gap-3 m-2">
                <a href="">
                    <font-awesome-icon icon="fa-brands fa-github" />
                </a>
                <a href="">
                    <font-awesome-icon icon="fa-brands fa-linkedin-in" />
                </a>
            </div>
        </div>
    </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;

a {
    color: $white;
}

.footer {
    position: fixed;
    bottom: 0;
}
</style>