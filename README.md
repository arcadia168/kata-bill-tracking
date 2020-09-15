# README #

## Bill Payment Tracker Code Kata ##

A React application built using Redux and Thunks. Allows for the management of regular payments.
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

### Add Bill ###
![Add a bill](https://github.com/arcadia168/kata-bill-tracking/blob/master/add_bill_page.png?raw=true "Add Bill")

### Home Page ###
![Home Page](https://github.com/arcadia168/kata-bill-tracking/blob/master/home_page.png "Home Page")

### Edit/Delete Bill ###
![Edit/Delete Bill](https://github.com/arcadia168/kata-bill-tracking/blob/master/edit_delete_page.png?raw=true "Edit/Delete Bill")

## Features ##

- Built using React, Redux and Thunks
- Unit tested where appropriate! (Much more could be done)
- Components in their own folders
- Lots of small re-usable DRY components
- Styled using pure CSS via the BEM pattern with sizing units and colour variables.
- Using React Hooks!
- State management handled by Redux
- Async calls using Thunks
- Payments are stored in the API
- Appearance matches the provided design (as much as possible)
- Ability to add a regular payment with a name, amount, start date and frequency (weekly, monthly, annually)
- Ability to modify a regular payment (name, amount, start date and frequency)
- Ability to delete a regular payment
- Web app works on the latest version of Chrome and most browsers.

## Still to add/Missing features ##

- Better styling of the add payment page
- Separate styling for the 'edit mode' of the payment details page.
- Better formatting of dates (using MomentJS on the server side!)
- Better error handling
- Loading spinners!
- An error banner!
- More unit testing!
- End to end tests with Cypress/Nightwatch
- Talk a real MongoDB hosted in MongoLab/DynamoDB
- Host on cloud - GCP/AWS/Azure
- Validation!!! Of input fields and sanitization
