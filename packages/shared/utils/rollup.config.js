import {deleteSync} from "del";
import typescript from "rollup-plugin-typescript2";


export default async function ({ watch }) {
  // deleteSync("build");

  const builds = [];

  builds.push({
    plugins: [
      typescript(),
    ],
    external: [],
    input: ["lib/index.ts"],
    output: [
      {
        dir: "build/esm/",
        format: "esm",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
      },
      {
        dir: "build/cjs/",
        format: "cjs",
        entryFileNames: "[name].js",
        chunkFileNames: "[name].js",
      },
    ],
  });

  return builds;
}
