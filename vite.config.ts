import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
// import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // alias: {
    //   "@assets": path.resolve(__dirname, "src/assets"),
    //   "@components": path.resolve(__dirname, "src/components"),
    //   "@pages": path.resolve(__dirname, "src/pages"),
    //   "@routes": path.resolve(__dirname, "src/routes"),
    //   "@store": path.resolve(__dirname, "src/store"),
    // }
  },
  plugins: [react(), svgr()],
})

