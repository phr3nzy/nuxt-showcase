<template>
  <v-layout mt-5 column justify-center align-center row>
    <v-layout row my-5>
      <v-flex xs12>
        <v-responsive>
          <v-container justify-center align-center class="white--text slight-br" my-5>
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
      </v-flex>
    </v-layout>

    <v-layout mt-4 mb-5 row justify-center align-center>
      <v-btn @click="scrollTo" class="hvr-down" huge flat fab :ripple="false" color="transparent">
        <v-icon color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>

    <v-layout my-5 row justify-center align-center>
      <v-item-group>
        <v-container grid-list-md>
          <v-layout my-5 row wrap>
            <v-flex v-for="(item, index) in items" :key="index" xs12 sm4>
              <v-item>
                <v-card
                  justify-center
                  align-center
                  flat
                  class="pa-5"
                  :elevation="24"
                  style="border-radius: 25px;"
                >
                  <v-icon color="secondary" size="150">{{item.icon}}</v-icon>
                </v-card>
              </v-item>
            </v-flex>
          </v-layout>
        </v-container>
      </v-item-group>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { icon: 'whatshot' },
        { icon: 'stars' },
        { icon: 'favorite_border' }
      ]
    }
  },
  methods: {
    scrollTo() {
      this.$el.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      })
    }
  }
}
</script>

<style scoped>
</style>

