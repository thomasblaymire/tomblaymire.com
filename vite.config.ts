import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');
  const shikiRehype = await import('@shikijs/rehype');
  const rehypeSlug = await import('rehype-slug');

  return {
    plugins: [
      {
        enforce: 'pre' as const,
        ...mdx.default({
          rehypePlugins: [
            rehypeSlug.default,
            [
              shikiRehype.default,
              {
                theme: 'one-dark-pro',
              },
            ],
          ],
        }),
      },
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
