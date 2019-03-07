<template>
  <v-layout column wrap>
    <v-layout row justify-center align-center mb-2>
      <v-responsive class="slight-br" width="100%" id="bg_pattern" height="600">
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
      <!-- <v-layout column v-for="(i,k) in 3" :key="i">
        <v-card class="ma-5">{{k}}</v-card>
      </v-layout>-->
    </v-layout>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
#bg_pattern {
  background-color: rgba(0, 0, 0, 0.1);
  background-size: 10rem;
}
</style>

