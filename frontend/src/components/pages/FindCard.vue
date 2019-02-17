<template>
    <v-card>
        <v-card-title primary-title>
            <div >
                <h3 class="headline mb-0">Search for a card to share an experience</h3>
                <div v-if="show_not_found">
                    <v-alert :value="true" :v-if="show_not_found" type="info">
                        Shucks, we couldn't find that card.  <br>Give it another try.
                    </v-alert>
                </div>
            </div>
        </v-card-title>
        <v-card-actions>
            <v-text-field
                    v-model="card_name"
                    label="Card ID"
                    v-on:keyup.enter="redirect"
            ></v-text-field>
            <v-btn flat color="blue" v-on:click="redirect">Find my card</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "FindCard"
    }
</script>

<style scoped>

</style>