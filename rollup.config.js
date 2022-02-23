
import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";

export default {
    input: 'src/index.ts',
    plugins: [
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
            tsconfig: './tsconfig.json'

        }),
        sourceMaps()
    ],
    output: [
        {
            format: 'cjs',
            file: 'lib/ztools.cjs.js'
        },
        {
            format: 'es',
            file: 'lib/ztools.esm.js'
        }
    ]
}