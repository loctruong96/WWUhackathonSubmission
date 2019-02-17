<template>
    <v-app id="inspire">
        <!--top image-->
        <v-parallax :src="require('@/assets/hero.jpeg')" height="400">
            <v-layout column align-center justify-center class="white--text">
                <h1 class="white--text mb-2 display-1 text-xs-center">Pay It Forward</h1>
            </v-layout>
        </v-parallax>

        <!--navigation-->
        <div class="text-xs-center">
            <router-link to="/">
                <v-btn color="secondary">Home</v-btn>
            </router-link>

            <router-link to="/tellstory">
                <v-btn color="secondary">Share a card experience</v-btn>
            </router-link>

            <router-link to="/statistica">
                <v-btn color="secondary">Interesting Cards</v-btn>
            </router-link>

        </div>
        <!--<v-navigation-drawer-->
                <!--v-model="drawerRight"-->
                <!--fixed-->
                <!--right-->
                <!--clipped-->
                <!--app-->
        <!--&gt;-->
            <!--<v-list dense>-->
                <!--<v-list-tile @click.stop="right = !right">-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon>exit_to_app</v-icon>-->
                    <!--</v-list-tile-action>-->
                    <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title>Open Temporary Drawer</v-list-tile-title>-->
                    <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
            <!--</v-list>-->
        <!--</v-navigation-drawer>-->
        <!--<v-toolbar color="blue-grey" dark fixed app clipped-right>-->
            <!--&lt;!&ndash;<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>&ndash;&gt;-->
            <!--<v-toolbar-title>Toolbar</v-toolbar-title>-->
            <!--<v-spacer></v-spacer>-->
            <!--<v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>-->
        <!--</v-toolbar>-->
        <!--<v-navigation-drawer-->
                <!--v-model="drawer"-->
                <!--fixed-->
                <!--app-->
        <!--&gt;-->
            <!--<v-list dense>-->
                <!--<v-list-tile @click.stop="left = !left">-->
                    <!--<v-list-tile-action>-->
                        <!--<v-icon>exit_to_app</v-icon>-->
                    <!--</v-list-tile-action>-->
                    <!--<v-list-tile-content>-->
                        <!--<v-list-tile-title>Open Temporary Drawer</v-list-tile-title>-->
                    <!--</v-list-tile-content>-->
                <!--</v-list-tile>-->
            <!--</v-list>-->
        <!--</v-navigation-drawer>-->
        <!--<v-navigation-drawer-->
                <!--v-model="left"-->
                <!--temporary-->
                <!--fixed-->
        <!--&gt;</v-navigation-drawer>-->
        <!--<v-content>-->
            <!--<v-flex shrink>-->
                <!--<router-view>-->
                <!--</router-view>-->
            <!--</v-flex>-->
        <!--</v-content>-->
        <v-content>
            <v-container fluid fill-height xs10 offset-xs1>
                <v-layout justify-center pl-3>
                    <v-flex shrink>
                        <router-view>
                        </router-view>
                    </v-flex>
                    <!--<v-flex shrink>-->
                        <!--<v-tooltip right>-->
                            <!--<v-btn slot="activator" :href="source" icon large target="_blank">-->
                                <!--<v-icon large>code</v-icon>-->
                            <!--</v-btn>-->
                            <!--<span>Source</span>-->
                        <!--</v-tooltip>-->
                        <!--<v-tooltip right>-->
                            <!--<v-btn slot="activator" icon large href="https://codepen.io/johnjleider/pen/KQrPKJ" target="_blank">-->
                                <!--<v-icon large>mdi-codepen</v-icon>-->
                            <!--</v-btn>-->
                            <!--<span>Codepen</span>-->
                        <!--</v-tooltip>-->
                    <!--</v-flex>-->
                </v-layout>
            </v-container>
        </v-content>
        <v-navigation-drawer
                v-model="right"
                right
                temporary
                fixed
        ></v-navigation-drawer>
        <v-footer color="blue-grey" class="white--text" app>
            <span>Pay It Forward</span>
            <v-spacer></v-spacer>
            <span>&copy; 2019</span>
        </v-footer>
    </v-app>
</template>

<script>
    export default {
        data: () => ({
            drawer: null,
            drawerRight: null,
            right: false,
            left: false
        }),
        props: {
            source: String
        }
    }
</script>

<style scoped>
    a { text-decoration: none; }
</style>
