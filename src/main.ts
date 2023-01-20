import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import {
  qiankunWindow,
  renderWithQiankun,
} from "vite-plugin-qiankun/es/helper";

const initQianKun = () => {
  renderWithQiankun({
    mount(props: any) {
      render(props.container);
    },
    bootstrap() {},
    unmount() {},
  } as any);
};

const render = (container: any) => {
  const appDom = container ? container : "#app";
  const app = createApp(App);
  app.use(createPinia());
  app.use(router);
  app.mount(appDom);
};

qiankunWindow.__POWERED_BY_QIANKUN__ ? initQianKun() : render(null);
