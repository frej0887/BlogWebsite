// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import md from 'vite-plugin-md';

export default defineConfig({
  plugins: [react(), md()],
});
