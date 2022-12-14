import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import Markdown from 'vite-plugin-react-markdown';

export default defineConfig({
  plugins: [
    Markdown(),
    react({
      include: [/\.tsx$/, /\.ts$/, /\.md$/],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
