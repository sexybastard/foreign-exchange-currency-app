This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test` or `yarn test`

Launches the test runner using jest.<br>

### `yarn install`

Install all dependencies if you want to clone the project, then you can 'yarn start' or 'yarn test' right away.<br>


## Techs

Using ReactJs with Redux as the state management. And using jest and enzyme for the unit testing.


## Docker built and run

$ docker build -t foreign-exchange-currency-app .

$ docker run -p 3000:3000 foreign-exchange-currency-app
