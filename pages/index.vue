<template>
  <v-container fluid>
    <v-layout align-center justify-center row>
      <div style="height: 450px;" class="white--text slight-br">
        <v-layout align-center column justify-center fill-height>
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
      </div>
    </v-layout>

    <v-layout mb-5 row justify-center align-center>
      <v-btn @click="scrollTo" class="hvr-down" huge flat fab :ripple="false" color="transparent">
        <v-icon color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>

    <v-layout row justify-center align-center fill-height>
      <v-item-group>
        <v-container grid-list-md>
          <v-layout align-center justify-center row wrap>
            <v-flex v-for="(item, index) in items" :key="index" xs12 sm4>
              <v-item>
                <v-card flat color="transparent" :elevation="24" style="border-radius: 25px;">
                  <v-card-text>
                    <v-icon color="white" size="20rem">{{item.icon}}</v-icon>
                  </v-card-text>
                </v-card>
              </v-item>
            </v-flex>
          </v-layout>
        </v-container>
      </v-item-group>
    </v-layout>
  </v-container>
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

