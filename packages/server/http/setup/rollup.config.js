const typescript = require('rollup-plugin-typescript2');
const nodeResolve = require('@rollup/plugin-node-resolve');

module.exports = {
    input: 'src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        sourcemap: true,
    },
    external: ['node-appwrite'],
    plugins: [typescript(), nodeResolve()],
};
