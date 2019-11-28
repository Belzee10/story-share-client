import Vue from 'vue';

const truncate = (str, length, clamp) => {
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

Vue.filter('truncate', str => truncate(str, 250, '...'));
Vue.filter('capitalizeFirstLetter', str => capitalizeFirstLetter(str));
