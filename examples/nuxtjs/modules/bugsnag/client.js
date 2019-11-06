import Vue from 'vue'
import Bugsnag from '@bugsnag/js'
import bugsnagVue from '@bugsnag/plugin-vue'
Bugsnag.init('<%= options.apiKey %>')
Bugsnag.use(bugsnagVue, Vue)

export default function ({ app }, inject) {
  inject('Bugsnag', Bugsnag)
}
