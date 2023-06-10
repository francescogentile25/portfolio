<template>
    <div class="container-fluid d-flex align-items-center">
        <div class="container ">
            <div class="text text-center">
                <h1>Su di me</h1>
                <p class="lh-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis recusandae quidem
                    unde est officiis
                    aliquam, consequuntur odio possimus, quia veniam qui eos, voluptates hic asperiores explicabo beatae
                    harum
                    quis.
                    Ratione fuga vel, soluta facere odio atque culpa suscipit minima nesciunt beatae ducimus, aliquid,
                    distinctio
                    rem? Nulla, magni quidem asperiores incidunt necessitatibus, exercitationem dolores assumenda culpa iure
                    vero
                    officia, natus optio ipsa laudantium atque soluta odio perspiciatis a consequuntur! Autem adipisci
                    itaque
                    iusto,
                    quod magnam odit. Totam consequatur, nulla sequi nisi sit accusantium ducimus necessitatibus
                    reprehenderit
                    enim
                    unde, perspiciatis cum eaque ad est dolorum dignissimos maxime commodi. Expedita vero dolorem nisi!</p>
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