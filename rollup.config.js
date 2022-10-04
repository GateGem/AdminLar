import { terser } from "rollup-plugin-terser";
import scss from 'rollup-plugin-scss'
import pkg from './package.json';

export default {
    input: 'src/index.ts',
    plugins: [
        terser(),
        scss({
            output: 'dist/adminlar.min.css',
            outputStyle: "compressed"
        }),
    ],
    output: [
        {
            name: pkg.name,
            file: pkg.browser,
            format: 'umd',
        },
        { 
            file: pkg.module,
            format: 'es' 
        },         
    ],
};