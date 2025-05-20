import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    server: {
        host: true,
        port: parseInt(process.env.PORT) || 5173,
        strictPort: true,
        allowedHosts: [
            'localhost',
            'ml-fe-zwvv.onrender.com'
        ],
        proxy: {
            '/api': {
                target: process.env.VITE_API_URL || 'http://127.0.0.1:8000',
                changeOrigin: true,
                secure: false, // Allow insecure connections for local development
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
});
