import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
    html: {
        title: "KICB",
        favicon: "./src/shared/favicon/favicon.ico",
    },
    plugins: [pluginReact(), pluginSass()],
});
