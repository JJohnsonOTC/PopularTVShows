<!--
 ===========================================================================
    Developer: Jeff Johnson
    Project:   Popular TV Shows
    Purpose:   Combination of using Vue CLI , axios and TMDB to generate
               a popular TV show site using components created in Vue.
===========================================================================
-->
<!-- The vue template inserted into the project, hosts all vue components-->
<template>
    <div id="app">
        <!-- vue Header component-->
        <Header theTitle="POPULAR TV SHOWS" />
        <div class="row justify-content-between" id="tv-content">
            <!-- cue Card component, binds prop aCard to cards in the array "cards"
                it is then spliced to return 4 cards from the TMDB API-->
            <Card v-for="card in cards.slice(0,4)" v-bind:aCard=card :key="card.id" />
        </div>
    </div>
</template>

<script>
    // Here the individual components are imported, as well as axios for API calls.
    import Header from './components/Header.vue'
    import Card from './components/Card.vue'
    import axios from 'axios'

    // The base vue instamce, components , data instantiated
    // As a function that returns the data held & declares items for export.
    export default {
        name: 'App',
        components: {
            // The individual vue compenents listed for the vue App
            Header,
            Card
        },
        // data must be declared as a function that returns data objects
        data() {
            return {

                cards:
                    [

                    ]

            }

        },
        // The axios program is ran as a life hook, runs when the component is added
        // to the DOM
        mounted() {
            // Use axios to send a get request to TMDB
            axios.get('https://api.themoviedb.org/3/tv/popular?api_key=aead884329065a55f2e90eedde805020&language=en-US&page=1')
                // The response from the TMDB API is then parsed to the cards array
                .then((response) => {
                    this.cards = response.data.results;
                    console.log(this.cards);
                })
        }
    }
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,600;1,700&display=swap');

    * {
        margin: 0;
        padding: 0;
    }

    #app {
        font-family: Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #tv-content {
        max-width: 90%;
        margin: 0px auto 0px auto;
    }
</style>
