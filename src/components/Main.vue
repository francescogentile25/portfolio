User
<template>
    <Profile></Profile>
    <AboutMe></AboutMe>
</template>
  
<script>
import Profile from './Profile.vue';
import AboutMe from './AboutMe.vue';

export default {
    components: {
        Profile,
        AboutMe,
    }
};
</script>
  
<style lang="scss" scoped>
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;
</style>