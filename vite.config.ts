import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
    return {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        chunkSizeWarningLimit: 2000, // Increase limit to reduce warnings for large chunks
        rollupOptions: {
          // Manual chunks removed to prevent circular dependency issues during load
          // Vite will handle splitting automatically based on dynamic imports and graph analysis
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
