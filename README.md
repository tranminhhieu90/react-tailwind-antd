I - Add tailwind to project

1. Install tailwind via yarn
   yarn add -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
   Create React App doesn’t support PostCSS 8 yet so you need to install the Tailwind CSS v2.0 PostCSS 7 compatibility build for now as we’ve shown above.

2. Install Craco
   yarn add @craco/craco
3. Edit script in package.json
   `
   "scripts": {
   "start": "craco start",
   "build": "craco build",
   "test": "craco test",
   "eject": "react-scripts eject"
   },

4. create new file craco.config.js // with package.json
   // craco.config.js
   module.exports = {
   style: {
   postcss: {
   plugins: [
   require('tailwindcss'),
   require('autoprefixer'),
   ],
   },
   },
   }

5. generate your tailwind.config.js file:
   npx tailwindcss-cli@latest init
   add bellow code to into file tailwind.config.js
   module.exports = {
   purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
   darkMode: false, // or 'media' or 'class'
   theme: {
   extend: {},
   },
   variants: {
   extend: {},
   },
   plugins: [],
   };
6. Yarn start and enjoy the moment

II - Add antd and change default themes

1. yarn add antd
2. yarn add craco-less
3. change /_ src/App.js _/

- import './App.css';

* import './App.less';

4.  /_ src/App.less _/

- @import '~antd/dist/antd.css';

* @import '~antd/dist/antd.less';

5. edit file craco.config.js
   const CracoLessPlugin = require('craco-less');
   module.exports = {
   plugins: [
   {
   plugin: CracoLessPlugin,
   options: {
   lessLoaderOptions: {
   lessOptions: {
   modifyVars: { '@primary-color': '#1DA57A' },
   javascriptEnabled: true,
   },
   },
   },
   },
   ],
   };
