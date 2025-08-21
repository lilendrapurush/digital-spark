import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/css/custom.css', 'resources/js/app.tsx'],
            ssr: 'resources/js/ssr.tsx',
            refresh: true,
        }),
        react(),
        tailwindcss(),
    ],
    esbuild: {
        jsx: 'automatic',
    },
    resolve: {
        alias: {
            'ziggy-js': resolve(__dirname, 'vendor/tightenco/ziggy'),
            'public': resolve(__dirname, 'public'),
            '@': resolve(__dirname, 'resources/js'),
            '@components': resolve(__dirname, 'resources/js/components'),
            '@parts': resolve(__dirname, 'resources/js/components/parts'),
            '@pages': resolve(__dirname, 'resources/js/pages'),
            // Optional:
            // '@layouts': resolve(__dirname, 'resources/js/layouts'),
            // '@hooks': resolve(__dirname, 'resources/js/hooks'),
            // '@lib': resolve(__dirname, 'resources/js/lib'),
        },
    },
});
