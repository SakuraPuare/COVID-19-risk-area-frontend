import { createApp } from "vue";
import App from "./App.vue";

import * as Icons from "@ant-design/icons-vue";

const app = createApp(App);

// 开始使用全局图标
const icons = Icons;
for (const i in icons) {
  // 循环注册组件
  app.component(i, icons[i]);
}

app.mount("#app");
