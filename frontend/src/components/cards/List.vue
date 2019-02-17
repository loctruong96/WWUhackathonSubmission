<template>
    <v-layout row class="'margin">
                    <v-list >
                        <v-list-tile v-for="item in items" :key="item.icon" avatar >

                            <v-list-tile-avatar>
                                <i class="material-icons" :key="item.icon" :style="item.color">{{item.icon}}</i>
                            </v-list-tile-avatar>

                            <v-list-tile-content>
                                <v-list-tile-title v-html="item.text"></v-list-tile-title>
                            </v-list-tile-content>

                            <v-list-tile-action>{{stat[item.num]}}</v-list-tile-action>
                        </v-list-tile>
                    </v-list>
    </v-layout>
</template>


<script>
    export default {
        name : "List",
        props: {
            stat: {
                type: Object,
                required: true}},
        data () {
            return {
                items: [
                    {icon: 'wb_sunny', color:'color:#CD5C5C', text:'Made my day', num: 'num_made_my_day'},
                    {icon: 'spa', color:'color:#F08080',text:'Changed my life', num: 'num_changed_my_life'},
                    {icon: 'filter_vintage', color:'color:#FA8072', text:'Restored my faith:', num: 'num_restored_my_faith_in_humanity'},
                    {icon: 'sentiment_dissatisfied', color:'color:#E9967A', text:'Meh', num: 'num_meh'},
                    {icon: 'thumb_up', color:'color:#FFA07A', text:'Kind gesture', num: 'num_what_a_kind_jesture'},
                    {icon: 'favorite', color:'color:#DC143C',text:'Made me feel loved', num: 'num_made_me_feel_loved'}
                ],
            }
        }
    }
</script>

<style>
    .margin{
        margin-top:10px;
    }

</style>
