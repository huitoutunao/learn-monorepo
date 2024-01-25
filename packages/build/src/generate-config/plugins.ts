import { Options as VueOptions } from '@vitejs/plugin-vue'

export interface GenerateConfigPluginsOptions {
  // 是否启用 @vitejs/plugin-vue 进行 vue 模板解析。配置规则如下，对于其他插件也适用。
  pluginVue?: boolean | VueOptions;
  // pluginInspect?: boolean | InspectOptions;
}
