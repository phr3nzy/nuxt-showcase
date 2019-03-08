<template>
  <v-layout column wrap>
    <v-container
      justify-center
      align-center
      class="white--text slight-br"
      style="margin-top: 14rem;"
    >
      <v-layout align-center column justify-center>
        <h1 class="display-3 font-weight-thick mb-3">Nuxify</h1>
        <h3 class="subheading">where Power and Beauty meet</h3>
        <v-btn to="/" color="white" class="secondary--text px-5" raised round ripple large>Discover</v-btn>
      </v-layout>
    </v-container>

    <v-layout class="mb-5" row justify-center align-center>
      <v-btn
        @click="$el.scrollIntoView('2nd_layout')"
        class="hvr-down"
        huge
        flat
        fab
        :ripple="false"
        color="transparent"
      >
        <v-icon color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>

    <v-layout v-el:2nd_layout class="my-5" id="2nd_layout" row justify-center align-center>
      <v-item-group>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="n in 3" :key="n" class="pa-5" xs12 sm4 md4 lg4>
              <v-item>
                <v-card style="border-radius: 15px;"></v-card>
              </v-item>
            </v-flex>
          </v-layout>
        </v-container>
      </v-item-group>
    </v-layout>
  </v-layout>
</template>

<script>
export default {}
</script>

<style scoped>
</style>

