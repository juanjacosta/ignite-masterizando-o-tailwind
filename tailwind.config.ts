import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        juan: '#172554',
      },
    },
  },
  plugins: [],
}
export default config
