import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vitest/config';

export default defineConfig(async () => {
  const mdx = await import('@mdx-js/rollup');
  const shikiRehype = await import('@shikijs/rehype');

  return {
    plugins: [
      {
        enforce: 'pre' as const,
        ...mdx.default({
          rehypePlugins: [
            [
              shikiRehype.default,
              {
                theme: 'one-dark-pro',
              },
            ],
          ],
        }),
      },
      react(),
    ],
    test: {
      globals: true,
      environment: 'happy-dom',
      setupFiles: ['./src/test/setup.ts'],
      css: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          'src/test/',
          '**/*.d.ts',
          '**/*.config.*',
          '**/mockData',
          'src/main.tsx',
        ],
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
