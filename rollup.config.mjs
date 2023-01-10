// import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
// import { uglify } from "rollup-plugin-uglify";
import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import svg from "@svgr/rollup";
import url from "rollup-plugin-url";
import image from "@rollup/plugin-image";
import copy from "rollup-plugin-copy";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: "./src/index.ts",
  output: [
    {
      file: "dist/index.js",
      format: "es",
    },
  ],
  plugins: [
    // peerDepsExternal(),
    typescript(),
    postcss({
      extensions: [".css"],
    }),
    url(),
    svg(),
    image(),
    copy({
      targets: [
        {
          src: "src/icons/svg/*.svg",
          dest: "dist/icons/svg",
        },
      ],
    }),
    resolve(),
    // uglify(),
    babel(),
    commonjs(),
  ],
};
