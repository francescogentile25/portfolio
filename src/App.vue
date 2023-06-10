<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Main,
        Header,
        Footer
    },

}
</script>

<template>
    <div class="background">
        <Main></Main>
        <Footer></Footer>
    </div>
</template>

<style lang="scss">
@use './style/general.scss' as *;
@use './style/color.scss' as *;


.background {
    background-color: $primary;
}
</style>
