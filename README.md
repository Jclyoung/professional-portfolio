## Quick Start

Run the following commands:

```
npm install
npm start
```

Install dependencies and starts the application

## Project Overview
My professional Portfolio

Created with [Create React App](https://github.com/facebook/create-react-app).

11/14
  1. removed
      - App.css
  2. added
      - .prettierrc
      - App.scss
      - src/assets/fonts
      - src/assets/images
      - src/components/Layout/index.js
      - src/components/Layout/index.scss
      - src/components/Sidebar/index.js
      - src/components/Sidebar/index.scss
  3. Installed 
      - [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser) for contact form implmentation 
      - [@fortawesome/react-fontawesome](https://www.npmjs.com/package/@fortawesome/react-fontawesome) 
      - [@fortawesome/fontawesome-svg-core]{https://www.npmjs.com/package/@fortawesome/fontawesome-svg-core}
      - [@fortawesome/free-brands-svg-icons]{https://www.npmjs.com/package/@fortawesome/free-brands-svg-icons}
      - [@fortawesome/free-regular-svg-icons]{https://www.npmjs.com/package/@fortawesome/free-regular-svg-icons}
      - [@fortawesome/free-solid-svg-icons]{https://www.npmjs.com/package/@fortawesome/free-solid-svg-icons}
      - [animate.css](https://www.npmjs.com/package/animate.css) css library that animates objects and fonts, supports the prefers-reduced-motion media query 
      - [gsap-trial](https://www.npmjs.com/package/gsap-trial) css library for advanced animations
      - [loaders.css]{https://www.npmjs.com/package/loaders.css} library of loading animations
      - [react-leaflet]{https://www.npmjs.com/package/loaders.css} library for using leaflet maps
      - [react-loaders]{https://www.npmjs.com/package/react-loaders} wrapper for loaders.css react integration
      - [react-router-dom](https://www.npmjs.com/package/react-router-dom} for declaring routing
      - [sass]{https://www.npmjs.com/package/sass} Dart Sass compiled to pure js, provides command-line sass excutable
      - []{}
  4. added custom styles to index.css
  5.  
  6. 
  7. Added data fetching in `/src/services`.
  8. Added db.json to root as json-server's mock database
  9. Overwrote App.css with custom styles
  10. Simplified index.js (removed service worker)
  11. Deleted from src: index.css, logo.svg, serviceWorker.js, App.test.js
  12. Deleted from public: logo files, manifest.json, robots.txt
  13. Change product.skus to product.data to be able better define the array of objects
  14. Add useFetch to collect data from mockdb

