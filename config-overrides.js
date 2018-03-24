var path = require('path');

module.exports = function override(config, env) {
  config.resolve.alias['@'] = path.resolve(__dirname, 'src/');
  config.resolve.alias.Actions = path.resolve(__dirname, 'src/actions/');
  config.resolve.alias.Actions$ = path.resolve(__dirname, 'src/actions/index.js');
  config.resolve.alias.Components = path.resolve(__dirname, 'src/components/');
  config.resolve.alias.Constants$ = path.resolve(__dirname, 'src/constants/index.js');
  config.resolve.alias.Helpers = path.resolve(__dirname, 'src/helpers/');
  config.resolve.alias.Helpers$ = path.resolve(__dirname, 'src/helpers/index.js');
  config.resolve.alias.Reducers = path.resolve(__dirname, 'src/reducers/');
  config.resolve.alias.Reducers$ = path.resolve(__dirname, 'src/reducers/index.js');
  config.resolve.alias.Sagas = path.resolve(__dirname, 'src/sagas/');
  config.resolve.alias.Sagas$ = path.resolve(__dirname, 'src/sagas/index.js');
  config.resolve.alias.Services = path.resolve(__dirname, 'src/services/');
  config.resolve.alias.Store$ = path.resolve(__dirname, 'src/store/index.js');
  config.resolve.extensions = ['.js', '.jsx', '.css', '.es6'];
  return config;
}
