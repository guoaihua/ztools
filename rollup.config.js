
import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
const html = require('@rollup/plugin-html');


export default {
    input: 'src/index.ts',
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
            tsconfig: './tsconfig.json',
            declaration: false
        }),
        sourceMaps(),
        html()
    ],
    output: [
        {
            format: 'cjs',
            file: 'dist/index.cjs.js'
        },
        {
            format: 'es',
            file: 'dist/index.esm.js'
        },
        {
            format: 'umd',
            name: 'ztools',
            file: 'dist/index.js'
        }
    ]
}