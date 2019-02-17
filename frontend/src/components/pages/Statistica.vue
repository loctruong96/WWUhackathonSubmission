<template>
    <div>
        <h1 class="pl-5 pr-5 text-xs-center">Featured Cards</h1>
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
                stats_cards: [],
                items: [
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'}
                ]

            }
        },
        beforeMount() {
            this.getStats();
        },
        methods: {
            getStats() {
                let self = this;
                axios.get(this.$searchAPI, {
                    params: {
                        stat: true
                    }
                }).then(function (response) {
                    console.log(response);
                    self.stats_cards = response.data;
                }).catch(function (error) {
                    console.log(error)
                })
            }
        },
    }
</script>

<style scoped>

</style>