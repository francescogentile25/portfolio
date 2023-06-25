<template>
    <div class="container-fluid d-flex align-items-center" id="contactMe">
        <div class="container ">
            <div class="text text-center">
                <h1 class="mb-4">Contattami</h1>
                <div class="row justify-content-center">
                    <div class="col-lg-10 col-md-12">

                        <div class="row justify-content-center">
                            <div class="col-lg-8 mb-4">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div
                                            class="dbox w-100 text-center d-flex flex-column align-items-center justify-content-center">
                                            <div
                                                class="icon  rounded-circle  d-flex flex-column align-items-center justify-content-center mb-2">
                                                <font-awesome-icon icon="fa-solid fa-location-dot icon" />
                                            </div>
                                            <div class="text">
                                                <p class="m-0">Indirizzo:</p>
                                                <p>Piazza Sabaudia 44, Roma</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            class="dbox w-100 text-center d-flex flex-column align-items-center justify-content-center">
                                            <div
                                                class="icon  rounded-circle  d-flex flex-column align-items-center justify-content-center mb-2">
                                                <font-awesome-icon icon="fa-solid fa-phone icon " />
                                            </div>
                                            <div class="text">
                                                <p class="m-0">Cellulare:</p>
                                                <a href="tel://1234567920">3274594446</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div
                                            class="dbox w-100 text-center d-flex flex-column align-items-center justify-content-center">
                                            <div
                                                class="icon  rounded-circle  d-flex flex-column align-items-center justify-content-center mb-2">
                                                <font-awesome-icon icon="fa-solid fa-paper-plane icon" />
                                            </div>
                                            <div class="text">
                                                <p class="m-0">Email:</p>
                                                <a
                                                    href="mailto:francescogentile@gmail.com">francescogentile250893@gmail.com</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="contact-wrap">
                                    <form method="POST" id="contactForm" name="contactForm" class="contactForm"
                                        novalidate="novalidate">
                                        <div class="row g-2">
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="name" id="name"
                                                        placeholder="Nome">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="email" class="form-control" name="email" id="email"
                                                        placeholder="Email">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" name="subject" id="subject"
                                                        placeholder="Oggetto">
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <textarea name="message" class="form-control" id="message" cols="30"
                                                        rows="8" placeholder="Messaggio"></textarea>
                                                </div>
                                            </div>
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <input type="submit" value="Invia" class="btn btn-primary w-50">
                                                    <div class="submitting"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
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

.text {
    color: $white;

    p:first-of-type {
        color: $secondary;
    }
}

.icon {
    width: 40px;
    background-color: $secondary;
    aspect-ratio: 1;
}

a {
    color: currentColor;
}

.btn-primary {
    background-color: $button;
    border-color: $button;
    color: $primary;

    &:hover {
        background-color: #efbf67;
        border-color: $button;
    }

    &:active {
        background-color: #ecac34 !important;
        border-color: $button !important;
    }
}

.form-control {
    background-color: #191720 !important;

    border-color: transparent;
    color: $white !important;
    ;

    &::placeholder {
        color: #8b8a93;
    }

    &:valid {
        background-color: #242424 !important;
        border-color: transparent;
        color: $white !important;
        ;
    }
}

.icon {
    color: $primary;
}
</style>