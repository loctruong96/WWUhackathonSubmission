<template>
    <v-timeline>
        <v-timeline-item
                v-for="(year, i) in myHistory"
                :key="i"
                :color="year.color"
                small>
            <span slot="opposite" :class="`headline font-weight-bold grey--text`" v-text="moment(year.datetime).format('h:mma MMM D \'YY')">
            ></span>
            <div class="py-3">
                <h4 class="text-xs-center" :class="`font-weight-light ${year.color}--text`">  <!-- took out headline -->
                    <i class="material-icons" style="color:grey">location_on</i>
                    {{ extractLocation(year.location) }}
                </h4>
                <!--<p style="color:transparent">This is a dummy line that is needed to be removed. The problem with width </p>-->
                <h3 class="text-xs-center">
                    {{year.story}}
                </h3>
                <p class="text-xs-center">
                    <i class="material-icons" v-if="sentimentOn(year.sentiment, items[0].bin)" :style="items[0].color">{{items[0].icon}}</i>
                    <i class="material-icons" v-if="sentimentOn(year.sentiment, items[1].bin)" :style="items[1].color">{{items[1].icon}}</i>
                    <i class="material-icons" v-if="sentimentOn(year.sentiment, items[2].bin)" :style="items[2].color">{{items[2].icon}}</i>
                    <i class="material-icons" v-if="sentimentOn(year.sentiment, items[3].bin)" :style="items[3].color">{{items[3].icon}}</i>
                    <i class="material-icons" v-if="sentimentOn(year.sentiment, items[4].bin)" :style="items[4].color">{{items[4].icon}}</i>
                    <i class="material-icons" v-if="sentimentOn(year.sentiment, items[5].bin)" :style="items[5].color">{{items[5].icon}}</i>
                </p>
            </div>
        </v-timeline-item>
    </v-timeline>
</template>

<script>
    export default {
        name : "Timeline",
        props: ['myHistory'],
        data () {
            return {
                items: [
                    {icon: 'wb_sunny', color:'color:#CD5C5C', text:'Made my day', num: 'num_made_my_day', bin: 0x20},
                    {icon: 'spa', color:'color:#F08080',text:'Changed my life', num: 'num_changed_my_life', bin: 0x10},
                    {icon: 'filter_vintage', color:'color:#FA8072', text:'Restored my faith:', num: 'num_restored_my_faith_in_humanity', bin: 0x8},
                    {icon: 'sentiment_dissatisfied', color:'color:#E9967A', text:'Meh', num: 'num_meh', bin: 0x1},
                    {icon: 'thumb_up', color:'color:#FFA07A', text:'Kind gesture', num: 'num_what_a_kind_jesture', bin: 0x2},
                    {icon: 'favorite', color:'color:#DC143C',text:'Made me feel loved', num: 'num_made_me_feel_loved', bin: 0x4}
                ]
            }
        },
        methods: {
            extractLocation: function(location) {
                let return_location = "";
                try {
                    let result = JSON.parse(location);
                    return_location = result.city + ", " + result.region_code + ", " + result.country_code;
                    return return_location;
                } catch (e) {
                    return_location = "Location Unkown";
                    return return_location;
                }
            },
            sentimentOn: function(value, hex_value) {
                if ((value & hex_value) > 0) {
                    return true;
                }
                return false;
            }
        },
        computed: {
        },
    }
</script>

<style scoped>

</style>
