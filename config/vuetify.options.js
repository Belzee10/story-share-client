import light from '~/config/Themes/light.js';
import dark from '~/config/Themes/dark.js';

export default {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    // dark: true,
    themes: {
      light: light.default,
      dark: dark.default
    },
    options: {
      customProperties: true
    }
  }
};
