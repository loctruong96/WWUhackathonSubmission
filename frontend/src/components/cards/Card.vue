<template>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3>
            <v-card>

                <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{my_card.name}}</h3>
                            <v-layout class="mb-0">
                                  <span class="group pad custom-font">
                                    <span><i class="material-icons" style="color:darkred">location_on</i>
                                        Origin: {{my_card.birthplace}}</span>
                                  </span>
                            </v-layout>
                        <List :stat="my_card"></List>
                    </div>
                </v-card-title>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
    import List from "../cards/List";
    export default {
        name: "Card",
        components: {List},
        props: {
            my_card: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style>
    .custom-font{
        font-size: 16px;
        font-weight: 400;
    }
    .pad{
        padding: 20px !important;
    }

</style>
