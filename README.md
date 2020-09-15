# README #

## Bill Payment Tracker Code Kata ##

A React application that allows the management of regular payments.
A basic React application built using `Create React App` and includes `Redux Toolkit` and `React Router`.
A simple Node API used to store, modify, retrieve and delete payments.

_Please note, the API stores objects in-memory, there is no database, therefore all objects are lost when the server is stopped!_

## Get it up and running ##

- Open a terminal, run:
    - Navigate to this repo folder
    - `cd web-app`
    - `yarn install`
    - `yarn start`
    - Run tests via `yarn test`

- Open another terminal:
    - Navigate to this repo folder
    - `cd api`
    - `yarn install`
    - `yarn start`

## How my styling looks ##


## Features ##

- Built using React
- Unit tested where appropriate!
- Components in their own files
- Styled using pure CSS with sizing units and colour variables.
- Using React Hooks!
- State management handled by Redux
- Payments are stored in the API
- Appearance matches the provided design (as a rough guide)
- Ability to add a regular payment with a name, amount, start date and frequency (weekly, monthly, annually)
- Ability to modify a regular payment (name, amount, start date and frequency)
- Ability to delete a regular payment
- Web app works on the latest version of Chrome

## Still to add/Missing features ##

- Better error handling
- Use of Thunks
- More unit testing!
- End to end tests with Cypress/Nightwatch
- Talk a real MongoDB hosted in Mongolab
- Host on cloud - GCP/AWS/Azure
- Validation!!! Of input fields and sanitization
