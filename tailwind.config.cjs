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
    extend: {}
  },
  plugins: [
    require('@skeletonlabs/skeleton/tailwind/theme.cjs')
  ]
};
