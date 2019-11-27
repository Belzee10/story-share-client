export default $axios => resource => ({
  /**
   * get all stories
   */
  get() {
    return $axios.$get(`${resource}`);
  }
});
