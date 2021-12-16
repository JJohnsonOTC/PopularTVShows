<!--
 ===========================================================================
    Developer: Jeff Johnson
    Project:   Popular TV Shows
    Purpose:   Combination of using Vue CLI , axios and TMDB to generate
               a popular TV show site using components created in Vue.
===========================================================================

The template for the vue Card component. -->
<template>
    <div class="card col-5 style='width: 18rem;'">
        <div class="row">
            <div class="col-md-6 col-left">
                <!-- Binding the image to the cards passed through the prop -->
                <img v-bind:src="'https://image.tmdb.org/t/p/w500' + aCard.poster_path" class="d-none d-md-block imgClass" alt="...">
            </div>
            <div class="col-md-6 col-right overflow-hidden">
                <div class="card-body">
                    <!-- the name and "overview(description) are passed through the aCard prop"-->
                    <h2 class="card-title">{{ aCard.name }}</h2>
                    <p class="card-text fs-6"> {{ aCard.overview }} </p>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    // The information that is passed to parent class
    export default {
        name: "Card",
        props: ['aCard']
    }
</script>
<style scoped>
    /* The style scoped to only this component */
    .card {
        background-color: #000000;
        color: #ffffff;
        border-radius: 10px;
        filter: drop-shadow(0 0 0.25rem black);
        height:auto;
    }

    img {
        max-width:334px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .card-title {
        border-bottom: inset;
    }

    .card-text {
        padding-top: 10px;
        font-size: 1.15rem;
    }

    p {
        color: #F0FFFF;
    }

    .col-left {
        padding: 0;
    }

    h2 {
        font-family: 'Montserrat',Helvetica, Arial, Verdana, sans-serif;
        font-weight: bold;
        padding-bottom: 10px;
    }
    .col-md-6 {
        height:auto;
    }
</style>