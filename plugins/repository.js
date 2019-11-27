import apiRepository from '~/api';

export default (ctx, inject) => {
  Object.keys(apiRepository).forEach(key => {
    const repositoryWithAxios = apiRepository[key](ctx.$axios);
    inject(`${key}Repository`, repositoryWithAxios(`/${key}`));
  });
};
