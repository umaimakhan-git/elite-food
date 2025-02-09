import { FlatCompat } from '@eslint/eslintrc'
/** @type {import('next').NextConfig} */
import { URL } from 'url'

const __dirname = decodeURI(new URL('.', import.meta.dirname).pathname)

const nextConfig = {
  eslint : {
    ignoreDuringBuilds: true
  },
}

const compat = new FlatCompat({
  
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
  }),
]

export default eslintConfig
module.exports = nextConfig