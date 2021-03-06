
import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
    input: 'src/index.ts',
    plugins: [

        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
            tsconfig: './tsconfig.json',
            declaration: false
        }),
        sourceMaps()
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