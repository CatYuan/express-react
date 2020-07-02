# Express-React

Provides boilerplate. Serves the Express backend and the React single page app front end from the same application.
Based off of [this](https://medium.com/@lowewenzel/serving-express-with-a-react-single-page-app-within-the-same-application-c168f1c44201) guide.

Built from create-react-app and express-generator

To run in development mode, use `npm run dev`
To build for production, use `npm run build`

The react-app is stored in the `/react-spa` folder.

Data fetching w/ hooks in `/react-spa/src/app.js` is implemented, following [this](https://www.robinwieruch.de/react-hooks-fetch-data) guide.

In the future, this will be depreciated. Hooks are not supposed to be used for async data fetching. This functionality will be replaced by `<Suspense>`. For more info on this, check [here](https://reactjs.org/docs/concurrent-mode-suspense.html).
In the experimental stage, here is a [guide](https://blog.logrocket.com/react-suspense-for-data-fetching/) that deals with async data fetching using `<Suspense>`
