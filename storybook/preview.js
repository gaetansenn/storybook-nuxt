import Vue from 'vue';
import Color from '@/storybook/colors/Color.vue'
// global register of components in components folder
import '@/.nuxt-storybook/storybook/preview.js'

// import * as components from '@/.nuxt-storybook/components/index';
// Object.keys(components).forEach(name => Vue.component(name, components[name]))

Vue.component('Color', Color);
