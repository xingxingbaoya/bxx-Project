// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue()]
// })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

export default ({ command, mode }) => {
  if (command === 'serve') {
    console.log('is serve')
  } else {
    console.log('is build')
  }
  return defineConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    base: '',
    build: {},
    server: {
      open: true,
    },
    plugins: [
      vue(),
    ],
  })
}
