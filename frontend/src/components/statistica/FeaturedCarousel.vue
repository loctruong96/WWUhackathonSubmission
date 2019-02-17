<template>
    <v-carousel hide-controls>
        <v-carousel-item v-for="(item,i) in items" :key="i">
            <v-card>
                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{ item.msg }}</h3>
                    </div>
                </v-card-title>

                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">View Card</v-btn>
                </v-card-actions>
            </v-card>
        </v-carousel-item>

    </v-carousel>
</template>

<script>
    export default {
        name: "FeaturedCarousel",
        data () {
            return {
                items: [
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', msg: "Someone bought me a coffee and made my bad day go away"},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg', msg: "I almost got a parking ticket until someone fed the meter"},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg', msg: "Helped me fix a tire in the pooring rain"},
                    {src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg', msg: "Bought me school supplies I couldn't afford"}
                ]
            }
        },
    }
</script>

<style scoped>

</style>