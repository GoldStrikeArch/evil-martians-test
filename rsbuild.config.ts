import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

export default defineConfig({
  plugins: [pluginSvelte()],
  output: {
    injectStyles: true,
    assetPrefix: 'https://goldstrikearch.github.io/evil-martians-test/'
  },
  html: {
    template: "./public/index.html",
    title: "Evil Martians Demo Task",
    favicon: './src/assets/favicon.ico'
  },
});
