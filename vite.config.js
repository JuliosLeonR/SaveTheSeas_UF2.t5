import { defineConfig } from 'vite';
import path from 'path';
import viteImagemin from 'vite-plugin-imagemin';
import imagePresets, { widthPreset } from 'vite-plugin-image-presets';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  root: './',
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        AboutUS: path.resolve(__dirname, 'html/AboutUs.html'),
        Gallery: path.resolve(__dirname, 'html/Gallery.html'),
        JoinUs: path.resolve(__dirname, 'html/JoinUs.html'),
        login: path.resolve(__dirname, 'html/login.html'),
        Merch: path.resolve(__dirname, 'html/Merch.html'),
        Product: path.resolve(__dirname, 'html/Product.html'),
        News: path.resolve(__dirname, 'html/News.html'),
        register: path.resolve(__dirname, 'html/register.html'),
        WhatWeDo: path.resolve(__dirname, 'html/WhatWeDo.html'),
      },
    },
  },
  plugins: [
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.65, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
      webp: {
        quality: 75,
      },
    }),
    imagePresets({
      responsive: widthPreset({
        widths: [320, 640, 960, 1200, 1800],
        formats: {
          webp: { quality: 80 },
          avif: { quality: 80 },
        },
      }),
    }),
    viteStaticCopy({
      targets: [
        { src: 'img/**/*', dest: 'img_optimized' },
      ],
    }),
  ],
});