import { defineConfig } from "@lynx-js/rspeedy";

import { pluginQRCode } from "@lynx-js/qrcode-rsbuild-plugin";
import { pluginReactLynx } from "@lynx-js/react-rsbuild-plugin";
import { pluginTypeCheck } from "@rsbuild/plugin-type-check";
import path from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const require = createRequire(import.meta.url);

console.log("xxxxxx", require.resolve("@lynx-js/react/compat"))

export default defineConfig({
  source: {
    entry: "./src/index.tsx",
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  tools: {
    rspack: {
      resolve: {
        alias: {
          react$: require.resolve("@lynx-js/react/compat"),
          "react-dom$": require.resolve("@lynx-js/react/compat"),
        },
      },
    },
  },
  plugins: [
    pluginQRCode({
      schema(url) {
        // We use `?fullscreen=true` to open the page in LynxExplorer in full screen mode
        return `${url}?fullscreen=true`;
      },
    }),
    pluginReactLynx(),
    pluginTypeCheck(),
  ],
});
