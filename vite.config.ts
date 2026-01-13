import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      chunkSizeWarningLimit: 2000, // Increase limit to reduce warnings for large chunks
      rollupOptions: {
        output: {
          manualChunks: undefined
        },
        // Suppress eval warnings from third-party libraries
        onwarn(warning, warn) {
          // Suppress eval warnings from protobufjs (third-party dependency)
          if (warning.code === 'EVAL' && warning.id?.includes('protobufjs')) {
            return;
          }
          warn(warning);
        }
      }
    }
  };
});
