<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-bottom-dark" data-bs-theme="dark"
        :class="{ 'navbar-hidden': !navbarVisible }">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#aboutMe">Chi sono</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#skill">Skill</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#portfolio">Progetti</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#contactMe">Contattami</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
  
<script>
export default {
    data() {
        return {
            navbarVisible: true,
            prevScrollPos: window.pageYOffset,
        };
    },
    mounted() {
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
            const currentScrollPos = window.pageYOffset;
            const scrollThreshold = 400;

            if (currentScrollPos > this.prevScrollPos && currentScrollPos > scrollThreshold) {
                this.navbarVisible = false;
            } else {
                this.navbarVisible = true;
            }

            this.prevScrollPos = currentScrollPos;
        },
    },
};
</script>
  
<style scoped lang="scss">
@use '../style/general.scss' as *;
@use '../style/color.scss' as*;

.navbar {
    transition: top 0.3s ease;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.02) !important;
    backdrop-filter: blur(8.7px) !important;
    -webkit-backdrop-filter: blur(8.7px) !important;

}

.navbar-hidden {
    top: -100px;
}

.nav-link:hover {
    color: $white;
    transition: 0.3s;
}
</style>
