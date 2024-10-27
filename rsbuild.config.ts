import { defineConfig } from "@rsbuild/core";
import { pluginSvelte } from "@rsbuild/plugin-svelte";

export default defineConfig({
  plugins: [pluginSvelte()],
  output: {
    injectStyles: true,
  },
  html: {
    template: "./public/index.html",
    title: "Evil Martians Demo Task",
  },
});
