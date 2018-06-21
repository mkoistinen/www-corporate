# Optimum Corporate

To run this application, execute the following commands:

  1. Install NPM modules

    ```
    $ npm install (or yarn install)
    ```

  2. Start the front-end dev server:

    ```
    $ npm run dev
    ```

  3. Create the app distribution to be used by a back-end server

    ```
    $ NODE_ENV=production grommet pack
    ```

  4. Test and run linters:

    ```
    $ npm test
    ```

  5. If the output has intentionally changed, update the snapshot with:

    ```
    $ yarn jest -u
    ```

## Component Documentation

This site uses Grommet for prebuilt react components: http://grommet.io/docs/components/
