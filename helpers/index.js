/**
 * transform the response from express
 * remove values from exclude
 * change the key "_id" by "id"
 * @param {Object} item
 * @param {Array} exclude
 */
export const transformResponse = (item, exclude = ['__v', 'created_at']) => {
  Object.keys(item).forEach(key => {
    if (exclude.includes(key)) delete item[key];
  });
  if (item._id) {
    item.id = item._id;
    delete item._id;
  }
  return item;
};
