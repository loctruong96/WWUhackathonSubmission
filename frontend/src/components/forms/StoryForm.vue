<template>
    <div>
        <div v-if="submit_error">
            <v-alert :value="true" :v-if="submit_error" type="error">
                Oops, looks like something went wrong submitting to our server!  Sorry about that. (err: {{ post_response }})
            </v-alert>
        </div>
        <v-form >
            <p>Share the story of how you received this card</p>
            <v-checkbox v-model="made_day.is_checked"     value="1" :label="made_day.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="changed_life.is_checked" value="1" :label="changed_life.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="restored_faith.is_checked" value="1" :label="restored_faith.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="meh.is_checked"            value="1" :label="meh.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="kind_gesture.is_checked"   value="1" :label="kind_gesture.desc" data-vv-name="checkbox" type="checkbox" />
            <v-checkbox v-model="feel_loved.is_checked"     value="1" :label="feel_loved.desc" data-vv-name="checkbox" type="checkbox" />
            <v-divider></v-divider>
            <v-textarea
                    v-model="story"
                    :counter="500"
                    maxlength="500"
                    full-width
                    single-line
                    label="Tell your story..."></v-textarea>
            <v-divider></v-divider>
        </v-form>
        <v-card-actions>
            <v-btn flat color="green" v-on:click="submitForm">Share</v-btn>
        </v-card-actions>
    </div>
</template>

<script>
    export default {
        name: "StoryForm",
        props: ['card_name'],
        data() {
            return {
                story: "",
                made_day: {key: "made_day", is_checked: false, desc: "Made my day", bin_value: 32},
                changed_life: {key: "changed_life", is_checked: false, desc: "Changed my life", bin_value: 16},
                restored_faith: {key: "restored_faith", is_checked: false, desc: "Restored my faith in humanity", bin_value: 8},
                meh: {key: "meh", is_checked: false, desc: "Meh", bin_value: 1},
                kind_gesture:  {key: "kind_gesture", is_checked: false, desc: "What a kind gesture", bin_value: 2},
                feel_loved: {key: "feel_loved", is_checked: false, desc: "Made me feel loved", bin_value: 4},
                post_response: "",
                submit_error: false,
            }
        },
        methods: {
            onCheckboxChange(e) {
                console.log(e.target.name);
                // console.log(oldValue);
                // this.title = 'VALUE: ' + (newValue ? 'TRUE' : 'FALSE');
            },
            computeSentiment () {
                let sentiment = 0;
                if (this.made_day.is_checked) sentiment += this.made_day.bin_value;
                if (this.changed_life.is_checked) sentiment += this.changed_life.bin_value;
                if (this.restored_faith.is_checked) sentiment += this.restored_faith.bin_value;
                if (this.meh.is_checked) sentiment += this.meh.bin_value;
                if (this.kind_gesture.is_checked) sentiment += this.kind_gesture.bin_value;
                if (this.feel_loved.is_checked) sentiment += this.feel_loved.bin_value;
                return sentiment;
            },
            async submitForm () {
                let self = this;

                let ip_address = "Location Unknown";

                await axios.get('https://api.ipify.org/?format=json', {
                }).then(function (response) {
                    console.log(response);
                    ip_address = response.data.ip;
                }).catch(function (error) {
                    console.log(error);
                });

                let ip_lookup = 'http://api.ipstack.com/' + ip_address + '?access_key=5e65942960bce479109f18f40462edf3';
                let ip_location_details = "Location Unknown";

                await axios.get(ip_lookup, {
                }).then(function (response) {
                    ip_location_details = response.data;
                });

                // console.log(ip_location_details)

                let  new_location = {
                    city: ip_location_details.city,
                    region_code: ip_location_details.region_code,
                    country_code: ip_location_details.country_code,
                    latitude: ip_location_details.latitude,
                    longitude: ip_location_details.longitude,
                    ip_address: ip_location_details.ip
                };

                let new_history = {
                    location: JSON.stringify(new_location),
                    sentiment: this.computeSentiment(),
                    datetime: new Date(),
                    story: this.story
                };

                console.log("posting...");

                let bad_language_status = 209;

                await axios.post(this.$submitAPI, {
                    name: this.card_name,
                    history: JSON.stringify(new_history),
                })
                    .then(function (response) {
                        console.log(response);
                        if (response.status === bad_language_status) {
                            console.log(response);
                            self.submit_error = true;
                            self.post_response = "We detected offensive language, please modify your story."
                        }
                        else if (response.status !== 200) {
                            console.log("error")
                            self.submit_error = true;
                            self.post_response = "error";
                        }
                        else {
                            console.log("success")
                            self.post_response = response.status;
                            self.$router.push("/card/" + self.card_name);
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                        self.post_response = "server";
                        if (error.status === bad_language_status) {
                            self.post_response = "We detected that the message was not positive, please share your positive experiences";
                        }
                        self.submit_error = true;
                        self.post_response = "server";
                    })

            }
        }

    }
</script>

<style scoped>

</style>