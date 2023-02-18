import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/',  //本地：/   github:/mangosteen/
  plugins: [vue()]
})
