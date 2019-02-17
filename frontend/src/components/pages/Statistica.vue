<template>
    <div>
        <h1 class="pl-5 pr-5">Featured Cards</h1>
        <FeaturedCarousel></FeaturedCarousel>
        <HighestStats></HighestStats>
    </div>
</template>

<script>
    import FeaturedCarousel from "../statistica/FeaturedCarousel";
    import HighestStats from "../statistica/HighestStats";
    export default {
        name: "Statistica",
        components: {HighestStats, FeaturedCarousel},
        data () {
            return {
                items: [
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
                ]

            }
        }
    }
</script>

<style scoped>

</style>