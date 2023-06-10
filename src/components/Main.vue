User
<template>
    <Profile></Profile>
    <AboutMe></AboutMe>
    <Technologies></Technologies>
</template>
  
<script>
import Profile from './Profile.vue';
import AboutMe from './AboutMe.vue';
import Technologies from './Technologies.vue';

export default {
    components: {
        Profile,
        AboutMe,
        Technologies,

    }
};
</script>
  
<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;
</style>