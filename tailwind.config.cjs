/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/*.svelte',
    './src/**/*.svelte',
    require('path').join(
      require.resolve('@skeletonlabs/skeleton'),
      '../**/*.{html,js,svelte,ts}'
    )
  ],
  theme: {
    extend: {
      colors: { purple: '#301161' },
      fontFamily: { 'sans': ['Menlo'] }
    }
  },
  plugins: [
    require('@skeletonlabs/skeleton/tailwind/theme.cjs')
  ]
};
