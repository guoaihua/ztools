
import typescript from "@rollup/plugin-typescript";
import sourceMaps from "rollup-plugin-sourcemaps";
import html from 'rollup-plugin-html2';
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

export default {
    input: 'src/index.ts',
    plugins: [
        html({
            template: 'index.html',
            inject: 'head'
        }),
        typescript({
            exclude: "node_modules/**",
            typescript: require("typescript"),
            tsconfig: './tsconfig.json',
            declaration: false
        }),
        serve({
            open: true,
            contentBase: ['dist', 'static'],
            port: 10001
        }),
        livereload({
            watch: ['dist'],
            verbose: false, // Disable console output
        }),
        sourceMaps()
    ],
    output: [
        {
            format: 'umd',
            name: 'ztools',
            file: 'dist/index.js'
        },
        {
            format: 'cjs',
            file: 'dist/index.cjs.js'
        },
        {
            format: 'es',
            file: 'dist/index.esm.js'
        },
    ]
}