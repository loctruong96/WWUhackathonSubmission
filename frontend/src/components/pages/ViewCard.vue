<template>
    <div>
        <div class="card-container">
            <Card :my_card="card"></Card>
        </div>
        <div class="timeline-container">
            <Timeline :myHistory="history"></Timeline>
        </div>
        </div>
</template>

<script>
    import Timeline from "../timeline/Timeline";
    import Card from "../cards/Card";
    export default {
            name: "ViewCard",
            components: {Timeline, Card},
            data() {
                return {
                    card: {},
                    history: {},
                    show_form: false,
                    show_not_found: false,
                    show_search: false
                }
            },
            computed: {},
            methods: {
                getCard() {
                    let self = this;
                    let card_name = this.$route.params.cardname;
                    console.log(card_name);
                    axios.get(this.$searchAPI, {
                        params: {
                            cardName: card_name,
                            oneOnly: true,
                        }
                    })
                        .then(function (response) {
                            if (response.data.length !== 1) {
                                self.show_not_found = true;
                            } else {
                                self.card = response.data[0];
                                self.history = response.data[0].history.reverse();
                                console.log(self.history);
                            }
                        })
                        .catch(function (error) {
                            self.show_not_found = true;
                            console.log(error);
                        })
                }
            },
            beforeMount() {
                this.getCard();
            }
    }
</script>
