import Vue from 'vue';

const truncate = (str, length = 250, clamp) => {
  if (!str) return '';
  const value = str.toString();
  return `${value.slice(0, length)}${clamp}`;
};

const capitalizeFirstLetter = str => {
  if (!str) return '';
  const value = str.toString();
  const first = value.slice(0, 1).toUpperCase();
  return `${first}${value.slice(1, value.length)}`;
};

Vue.filter('truncate', (str, length) => truncate(str, length, '...'));
Vue.filter('capitalizeFirstLetter', str => capitalizeFirstLetter(str));
