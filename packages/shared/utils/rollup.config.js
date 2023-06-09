import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';

export default async function () {
  const builds = [];

  builds.push({
    plugins: [typescript(), nodeResolve()],
    external: [],
    input: ['lib/index.ts'],
    output: [
      {
        dir: 'build/esm/',
        format: 'esm',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        sourcemap: true,
      },
      {
        dir: 'build/cjs/',
        format: 'cjs',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        sourcemap: true,
      },
    ],
  });

  return builds;
}
