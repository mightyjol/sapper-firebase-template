# sapper-template

This is a blank project for sapper to be deployed on firebase
- firebase functions serve the initial ssr load
- static files are handled by firebase hosting
- you can still dev locally (just need to try with firebase serve before deploying)

# Get started

```bash
npm run install
cd functions && npm install
```

update all .example files from config folder with your firebase credentials then remove .example extension
update src/firebase.config.example with your client firebase credentials then remove .example extension

```bash
yarn dev
```

You should be good to go

## Structure

Sapper expects to find two directories in the root of your project —  `src` and `static`.
"functions" directory is meant for firebase functions
"config" directory is meant for firebase config files

### static

The [static](static) directory contains any static assets that should be available. These are served using [sirv](https://github.com/lukeed/sirv). !Only in dev mode!

In your [service-worker.js](app/service-worker.js) file, you can import these as `files` from the generated manifest...

```js
import { files } from '../__sapper__/service-worker.js';
```

...so that you can cache them (though you can choose not to, for example if you don't want to cache very large files).
TODO figure out if firebase caching renders this process useless

## Bundler config

Added rollup-plugin-node-globals


## Production mode and deployment

To start a production version of your app, run `npm run build && npm start`. This will disable live reloading, and activate the appropriate bundler plugins.

You can deploy your application to firebase with `npm run deploy` or `yarn deploy`
this runs the predeploy.js script then deploys to firebase functions and hosting

predeploy.js just copies __sapper__ to the functions folder

## Bugs and feedback

Please let me know if this works for you or any improvements you would like to see
