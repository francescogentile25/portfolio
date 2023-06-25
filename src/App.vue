<script>
import Header from './components/Header.vue';
import Main from './components/Main.vue';
import Footer from './components/Footer.vue';

export default {
    components: {
        Header,
        Main,
        Footer
    },

}
</script>

<template>
    <div class="background">
        <Header></Header>
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
