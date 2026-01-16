import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');

  return {
    plugins: [
      { enforce: 'pre' as const, ...mdx.default() },
      react({
        include: [/\.tsx$/, /\.ts$/, /\.mdx$/],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
      sourcemap: false,
      minify: 'esbuild',
    },
    esbuild: {
      drop: ['console', 'debugger'],
    },
  };
});
