import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.config.productionTip = false;

Vue.use(Vuetify);

/**
 * silent "console.error"
 */
global.console = {
  error: jest.fn(),
  log: console.log,
  warn: console.warn,
  info: console.info,
  debug: console.debug
};

/**
 * wrap components with this
 */
const el = document.createElement('div');
el.setAttribute('data-app', true);
document.body.appendChild(el);
