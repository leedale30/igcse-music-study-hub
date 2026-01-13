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
          output: {
            manualChunks: {
              vendor: ['react', 'react-dom', 'react-router-dom'],
              // Separate music libraries into their own chunks
              music: ['tone', '@magenta/music', 'abcjs', 'vexflow'],
              midi: ['html-midi-player'],
              // UI libraries
              ui: ['@iconify/react', 'marked']
            }
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
