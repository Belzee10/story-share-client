import Vue from 'vue';

const truncate = (str, length, clamp) => {
  if (!str) return '';
  const value = str.toString();
  return `${value.slice(0, length)}${clamp}`;
};

Vue.filter('truncate', string => truncate(string, 250, '...'));
