<template>
    <div class="hello">
        <section>
            <v-layout
                    column
                    wrap
                    class="my-5"
                    align-center
            >
                <v-flex xs12 sm4 class="my-3">
                    <div class="text-xs-center">
                        <h2 class="headline">Making the world better</h2>
                        <span class="subheading">
                 one random act of kindness at a time
              </span>
                    </div>
                </v-flex>
                <v-flex xs12>
                    <v-container grid-list-xl>
                        <v-layout row wrap align-center>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">color_lens</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Get A Card</div>
                                    </v-card-title>
                                    <v-card-text>
                                        If someone receives a card accompanied with a random act of kindness, they can share their experience.
                                        A simple interface lets users quickly log the kindness they received and share their story.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline">Give A Card</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Pay It Forward.
                                        After receiving a card and sharing your experience, continue its legacy by performing a random act of kindness.
                                        This could be a family member, a friend, or a total stranger.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                            <v-flex xs12 md4>
                                <v-card class="elevation-0 transparent">
                                    <v-card-text class="text-xs-center">
                                        <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                                    </v-card-text>
                                    <v-card-title primary-title class="layout justify-center">
                                        <div class="headline text-xs-center">Track Your Card</div>
                                    </v-card-title>
                                    <v-card-text>
                                        Keep your card name and see it's progress.
                                        You may find your card has found it's way around the world, or is just making lives better in your neighborhood.
                                        Either way, it's legacy lives on because of you.
                                    </v-card-text>
                                </v-card>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </section>

        <section>
            <v-parallax :src="require('@/assets/hero.jpeg')" height="380">
                <v-layout column align-center justify-center>
                    <div class="headline white--text mb-3 text-xs-center">Pay It Forward</div>
                    <em>Change lives today</em>
                    <!--<v-btn-->
                            <!--class="blue lighten-2 mt-5"-->
                            <!--dark-->
                            <!--large-->
                            <!--href="/pre-made-themes"-->
                    <!--&gt;-->
                        Get Started
                    </v-btn>
                </v-layout>
            </v-parallax>
        </section>


    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Pay It Forward'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #35495E;
    }
</style>
