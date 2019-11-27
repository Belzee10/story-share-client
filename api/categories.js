export default $axios => resource => ({
  /**
   * get all categories
   */
  get() {
    return $axios.$get(`${resource}`);
  }
});
