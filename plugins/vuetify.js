import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
	theme: {
		primary: '#8e24aa', // a color that is not in the material colors palette
		accent: '#FFC107',
		secondary: '#e91e63',
		info: colors.teal.lighten1,
		warning: colors.amber.base,
		error: colors.deepOrange.accent4,
		success: colors.green.accent3
	}
})
