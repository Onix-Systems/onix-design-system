import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import image from '@rollup/plugin-image';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from 'postcss-url';

const packageJson = require('./package.json');

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      image(),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', sourceMap: true, inlineSources: true }),
      postcss({
        plugins: [
          url({
            url: 'inline',
          }),
        ],
      }),
      terser(),
    ],
  },
  {
    input: 'src/icons.ts',
    output: [{ dir: 'dist/cjs', format: 'cjs' }],
    plugins: [image()]

  },
  {
    input: 'src/icons.ts',
    output: [{ dir: 'dist/esm', format: 'esm' }],
    plugins: [image()]
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()],
    external: [/\.css$/],
  }
];
