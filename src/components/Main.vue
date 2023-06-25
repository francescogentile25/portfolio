User
<template>
    <Profile></Profile>
    <AboutMe></AboutMe>
    <Technologies></Technologies>
    <Carousel></Carousel>
    <ContactMe></ContactMe>
</template>
  
<script>
import Profile from './Profile.vue';
import AboutMe from './AboutMe.vue';
import Technologies from './Technologies.vue';
import ContactMe from './ContactMe.vue';
import Carousel from './Carousel.vue';

export default {
    components: {
        Profile,
        AboutMe,
        Technologies,
        Carousel,
        ContactMe,

    }
};
</script>
  
<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;
</style>