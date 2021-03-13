Run the application from the project root with:

```
npm install
npm start
```

To run tests, you need the url of a running frontend (ie http://localhost:3000).
```
./e2e/cypress.json
```
If you need a different baseUrl, then you can locally change the value of baseUrl
in the base-url.js file or you can provide the environment variable
CYPRESS_BASE_URL for the command execution (OS-dependent). Then run the tests
with the commands:
```
npm install
./node_modules/.bin/cypress run
```
