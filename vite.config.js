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
                target: 'https://ml-be-880p.onrender.com',
                changeOrigin: true,
                secure: true,
                rewrite: (path) => path.replace(/^\/api/, '')
            }
        }
    },
});
