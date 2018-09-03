import _ from 'lodash';

const config = {
  base: {
    apiPath: '/api/',
  },
  development: {
    apiHost: `${process.env.APIHOST || 'http://127.0.0.1:8360'}`,
    loginUrl: `${process.env.FRONTHOST || 'http://127.0.0.1:8083'}`,
    backUrl: `${process.env.ADMINHOST || 'http://127.0.0.1:8091'}`,
  },
  production: {
    apiHost: `${process.env.APIHOST || 'http://api.hkdev.mintv.cn'}`,
    loginUrl: `${process.env.FRONTHOST || 'http://front.hkdev.mintv.cn'}`,
    backUrl: `${process.env.ADMINHOST || 'http://admin.hkdev.mintv.cn'}`,
  },
};

export default (path) => {
  const baseConfig = config.base;
  const env = process.env.NODE_ENV;
  const envConfig = config[env] || {};
  const result = _.merge(baseConfig, envConfig);
  if (path) {
    return _.get(result, path);
  }
  return result;
};
