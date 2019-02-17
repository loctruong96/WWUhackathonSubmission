<template>
    <div>
        <!-- Card for form -->
        <v-card v-if="show_form" max-width="600" min-width="400" >
            <v-card-title primary-title >
                <div >
                    <h3 class="headline mb-0">Share Your Experience</h3>
                    <StoryForm :card_name="card_name"></StoryForm>
                </div>
            </v-card-title>
        </v-card>

        <!-- Card for failed search -->
        <v-card v-if="show_search">
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
    </div>
</template>

<script>
    import StoryForm from "../forms/StoryForm";
    export default {
        name: "TellStory",
        components: {StoryForm},
        data() {
            //this.$route.query
            return {
                card_name: "",
                show_form: false,
                show_not_found: false,
                show_search: false,
                card_name: "",
                card: "",
            }
        },
        computed: {},
        methods: {
            redirect () {
                // this.$router.push("/tellstory?name=" + self.card_name);
                this.show_form = false;
                this.show_not_found = false;
                this.show_search = false;
                this.$router.push({name: 'tellstory', query: { name: this.card_name }});
                this.getCard(this.card_name);
            },
            getCard(card_name) {
                let self = this;

                card_name = this.$route.query.name;
                console.log(card_name);
                this.card_name = card_name;
                // check for query in ur

                if (card_name === undefined || card_name === null) {
                    this.show_search = true;
                }
                else {
                    axios.get(this.$searchAPI, {
                        params: {
                            cardName: card_name,
                            oneOnly: true,
                        }
                    })
                        .then(function(response) {
                            console.log(response);
                            // if (response.data.length !== 1) {
                            if (response.data[0] === null) {
                                self.show_search = true;
                                self.show_not_found = true;
                            }
                            else {
                                self.show_form = true;
                                self.card_name = card_name;
                            }
                        })
                        .catch(function(error) {
                            self.show_not_found = true;
                        })
                }
            }
        },
        beforeMount(){
            this.card_name = this.$route.query;
            this.getCard();
        }
    }
</script>

<style scoped>

</style>
