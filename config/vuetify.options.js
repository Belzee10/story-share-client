import light from '~/config/Themes/light.js';
import dark from '~/config/Themes/dark.js';

export default {
  customVariables: ['~/assets/variables.scss'],
  theme: {
    themes: {
      light: light.default,
      dark: dark.default
    }
  }
};
