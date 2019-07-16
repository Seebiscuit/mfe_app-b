import App from "./src/App.vue"

import { routes } from './src/router'

const moduleName = 'mfe_app-b'

const AppAPlugin = {
  install(Vue, registerApp) {
    registerApp({
      module: moduleName,
      component: App,
      store: {},
      routes
    })
  }
};

export default AppAPlugin