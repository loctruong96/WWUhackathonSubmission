<template>
    <div>
        <v-btn color="success" v-on:click="testAxios">Success</v-btn>
        <p v-if="clicked">button clicked</p>
        <p v-if="has_response">
            Should see stuff here
            <br>
            {{ card_data }}
        </p>
        <p v-if="has_failed">
            We failed :-(
        </p>
    </div>
</template>

<script>
    export default {
        name: "ButtonExample",
        data() {
            return {
                clicked: false,
                has_response: false,
                has_failed: false,
                card_data: "",
                error: "",
            }
        },
        methods: {
            testAxios() {
                let self = this;
                this.clicked = true;
                axios.get(this.$searchAPI, {
                    params: {
                        cardName: 'helloWorld'
                    }
                })
                    .then(function(response) {
                        self.has_response = true;
                        self.card_data = response.data[0];
                    })
                    .catch(function(error) {
                        self.error = error;
                        self.has_failed = true;
                    })
            }
        }
    }
</script>

<style scoped>

</style>