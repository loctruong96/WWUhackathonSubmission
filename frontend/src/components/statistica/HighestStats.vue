<template>
            <v-card>
                    <v-layout
                            column
                            fill-height
                    >
                        <v-spacer></v-spacer>

                        <v-card-title class="grey--text text-xs-center">
                            <div class="display-1 pl-5 pt-5">Greatest Hits</div>
                        </v-card-title>
                    </v-layout>

                <v-list two-line>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="indigo">screen_share</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                Most Pay It Forwards
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            507
                        </v-list-tile-action>
                    </v-list-tile>


                    <v-divider></v-divider>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="#CD5C5C">wb_sunny</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                Made my day
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            422
                        </v-list-tile-action>
                    </v-list-tile>


                    <v-divider></v-divider>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="#F08080">spa</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                Changed my life
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            102
                        </v-list-tile-action>
                    </v-list-tile>


                    <v-divider></v-divider>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="#FA8072">filter_vintage</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                Restored my faith in Humanity
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            342
                        </v-list-tile-action>
                    </v-list-tile>


                    <v-divider></v-divider>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="#E9967A">sentiment_dissatisfied</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                Most Meh
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            88
                        </v-list-tile-action>
                    </v-list-tile>


                    <v-divider></v-divider>
                    <v-list-tile @click="">
                        <v-list-tile-action>
                            <v-icon color="#DC143C">favorite</v-icon>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>
                                indigo
                            </v-list-tile-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            507
                        </v-list-tile-action>
                    </v-list-tile>




                </v-list>
            </v-card>
</template>

<script>
    export default {
        name: "HighestStats"
    }
</script>

<style scoped>

</style>