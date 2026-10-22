import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // command === 'serve' 이면 로컬(개발), 'build' 이면 배포
    base: command === 'serve' ? '/' : '/mintchocoicecream.github.io/',
  }
})