<template>
  <v-layout column wrap>
    <v-layout row justify-center align-center mb-2>
      <v-responsive color="transparent" class="slight-br" width="100%" height="600">
        <v-container
          justify-center
          align-center
          class="white--text slight-br"
          style="margin-top: 14rem;"
        >
          <v-layout align-center column justify-center>
            <h1 class="display-3 font-weight-thick mb-3">Nuxify</h1>
            <h3 class="subheading">where Power and Beauty meet</h3>
            <v-btn
              to="/"
              color="white"
              class="secondary--text px-5"
              raised
              round
              ripple
              large
            >Discover</v-btn>
          </v-layout>
        </v-container>
      </v-responsive>
    </v-layout>

    <v-layout row justify-center align-center>
      <v-btn href="#2nd_layout" class="hvr-down" huge flat fab :ripple="false" color="transparent">
        <v-icon color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>

    <v-layout id="2nd_layout" row justify-center align-center>
      <v-card color="transparent" flat>
        <v-timeline class="slight-br">
          <v-timeline-item color="primary lighten-2" fill-dot right>
            <v-card hover style="border-radius: 20px;">
              <v-card-title class="primary lighten-2">
                <v-icon dark size="42" class="mr-3">search</v-icon>
                <h2 class="display-1 white--text font-weight-light">Search by Name</h2>
              </v-card-title>
              <v-container>
                <v-layout justify-center align-center>
                  <v-flex xs10>
                    <h1
                      class="subheading"
                    >Our Database contains all well known medicine. Search using name, medicine number or scientific name!</h1>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="secondary lighten-1" fill-dot left small>
            <v-card hover style="border-radius: 20px;">
              <v-card-title class="secondary lighten-1 justify-end">
                <h2 class="display-1 mr-3 white--text font-weight-light">Get Directions</h2>
                <v-icon dark size="42">directions</v-icon>
              </v-card-title>
              <v-container>
                <v-layout justify-center align-center>
                  <v-flex xs10>
                    <h1
                      class="subheading"
                    >Find directions to all the pharmacies closest to you with the medicine you need!</h1>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>

          <v-timeline-item color="secondary darken-2" fill-dot right>
            <v-card hover style="border-radius: 20px;">
              <v-card-title class="secondary darken-2">
                <v-icon class="mr-3" dark size="42">sentiment_very_satisfied</v-icon>
                <h2 class="display-1 white--text font-weight-light">Stay Healthy</h2>
              </v-card-title>
              <v-container>
                <v-layout justify-center align-center>
                  <v-flex xs10>
                    <h1
                      class="subheading"
                    >Your health is our top most priority. Access to medicine must be avaliable to all and many!</h1>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-card>
    </v-layout>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
/* #bg_pattern {
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 10rem;
} */
</style>

