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


## Code Explanation

So basically this app constructed by 1 screen (Home), which contains 3 components (AddCurrency, BaseCurrency, CurrencyList).

### Home
Container of all 3 components

### BaseCurrency
This component has its rate hardcoded to USD, initial amount is 1, then whenever the amount is changed will update redux states, 'rates', contains with all the converted rates of all currencies where the base currency is hardcoded to USD, and 'amount' where the initial value will be 1.

### AddCurrency
This component has its options hardcoded to the list that is mentioned on the document. Whenever the currency code is selected then submit, will update redux state 'currencies'

### CurrencyList
This component will retrieve the list of currencies that stored in redux state 'currencies', then renders the list of converted amount, based on base rate that also stored on redux state as 'rates'.

Since redux is not define as requirement on the document, so i guess i'll explain a bit about redux. Using redux we will have 3 major part, those are action, reducer, and redux state. All activities that executed on this application, will trigger an action, then the reducer will update the redux state based on the action, and at last the components will render based on the redux state.

note: I've indluded the redux logger. So you can actually watch the state evolving by checking on browser inspect console. The log looks like this. SET_AMOUNT will be the action name, the next line will be the object that the action is dispatching, and the next line will be the latest redux state.

SET_AMOUNT

---- dispatching {type: "SET_AMOUNT", payload: 1}

---- next state {amount: 1, currencies: Array(0), rates: {…}, ratesNameMap: {…}}
