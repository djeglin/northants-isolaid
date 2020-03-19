# covid-mutual-aid
This project allows the Northampton Mutual Aid group to explore the areas covered by volunteers offering to help in the community. Areas each have an array of coordinates and an ID. These IDs are for cross-referencing by the group admins so we don't risk exposing any PII data.

## Project stack overview
* *VueJS* The UI library being used to build this
* *Vue-CLU* Configuration and scaffolding
* *TailwindCSS* (in shadow mode) for styling without actually having to write much CSS
* *vue2-google-maps* to handle the heavy lifting of the gMaps API
* *Netlify* handles continuous deployment, lambda functions and static hosting

That's about it, really. Its a stupidly simply little project. There's much still to do, but it works.

## The getAreas function
This site makes use of Netlify's headless functions (lambda functions). Everything is already set up so that the build takes care of this, and the request is proxied properly when developing locally.

At the moment, the `getAreas` function returns static stubbed data, which will need to be replaced with new data when available. The intention is for this to be changed to an API request later, but for now we are adding the data manually.

The `getAreas` function can be found at `src/lambda/getAreas.js`. The `stubData` is pretty large already, so this is a ~1800 line js file, but most of this is the data - The function to return it is tiny.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


