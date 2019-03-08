<template>
  <v-layout column wrap>
    <v-layout row>
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
    </v-layout>

    <v-layout mb-5 row justify-center align-center>
      <v-btn @click="scrollTo" class="hvr-down" huge flat fab :ripple="false" color="transparent">
        <v-icon color="white">expand_more</v-icon>
      </v-btn>
    </v-layout>

    <v-layout class="my-5" row justify-center align-center>
      <v-item-group>
        <v-container grid-list-md>
          <v-layout row wrap>
            <v-flex v-for="(item, index) in items" :key="index" class="pa-5" xs12 sm4>
              <v-item>
                <v-card flat :elevation="24" style="border-radius: 25px;">
                  <v-icon color="secondary" size="200">{{item.icon}}</v-icon>
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

