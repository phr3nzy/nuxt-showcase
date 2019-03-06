const pkg = require('./package')

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

module.exports = {
	mode: 'universal',

	/*
  ** Headers of the page
  */
	head: {
		title: 'Nuxtify Showcase',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href:
					'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
			}
		]
	},

	/*
  ** Customize the progress-bar color
  */
	loading: { color: '#e91e63', height: '2px' },
	/*
   ** Loadig indicator while pages load
   */
	loadingIndicator: {
		name: 'circle',
		color: '#e91e63',
		background: 'white'
	},

	/*
  ** Global CSS
  */
	css: ['~/assets/style/app.styl'],

	/*
  ** Plugins to load before mounting the App
  */
	plugins: ['@/plugins/vuetify'],

	/*
  ** Nuxt.js modules
  */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/toast',
		'@nuxtjs/component-cache',
		'@nuxtjs/axios',
		'@nuxtjs/pwa'
	],
	/*
  ** Axios module configuration
  */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
	},
	/*
	** Manifest setup
	*/
	manifest: {
		name: 'Nuxtify - Nuxt & Vuetify Showcase',
		short_name: 'Nuxtify',
		lang: 'en',
		display: 'standalone',
		start_url: '/',
		background_color: '#e91e63',
		theme_color: '#8e24aa'
	},

	/*
  ** Build configuration
  */
	build: {
		transpile: ['vuetify/lib'],
		plugins: [new VuetifyLoaderPlugin()],
		loaders: {
			stylus: {
				import: ['~assets/style/variables.styl']
			}
		},

		/*
    ** You can extend webpack config here
    */
		extend(config, ctx) {}
	}
}
