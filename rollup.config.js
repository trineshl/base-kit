import resolve from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";

const config = {
  input: "src/index.js",
  output: [
    {
      file: "dist/index.es.js",
      format: "es",
      sourcemap: true,
    },
  ],
  plugins: [
    resolve({
      extensions: ['.js', '.jsx'],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: ["**/*.test.js", "**/*.test.js", "**/*.stories.js"]
    }),
    peerDepsExternal(),
    postcss()
  ]
};

export default config;