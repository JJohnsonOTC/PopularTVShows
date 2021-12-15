<!--
 ===========================================================================
    Developer: Jeff Johnson
    Project:   Popular TV Shows
    Purpose:   Combination of using Vue CLI , axios and TMDB to generate
               a popular TV show site using components created in Vue.
===========================================================================
    
    The template for the header component-->
<template>
    <div class="header">
        <!-- The desired message is passed through theTitle prop to display
            the desired message-->
        <h1>{{ theTitle }}</h1>
    </div>
</template>

<script>
    // Declare the information to pass to parent level class
    export default {
        name: "Header",
        props: ['theTitle']
    }
</script>

<style scoped>
    /* Styling applied only to this component.*/
    .header {
        font-family: 'Montserrat',Helvetica, Arial, Verdana, sans-serif;
        font-style: italic;
        font-weight: 700;
        text-align: center;
        padding: 10px;
        margin: 0px;
        color: #ffffff;
        background-color: #000000;
    }
</style>