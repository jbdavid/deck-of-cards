# DeckOfCards

This project consists of 2 parts:
- deck-of-cards (projects/deck-of-cards): a deck of cards management library. It provides 'shuffle' and 'deal one card' operations and expose the current state of dealt cards. It has been written with [NGXS state management framework](https://ngxs.gitbook.io/ngxs/).
- a demo application (src/app): a simple frontend app using deck-of-cards lib.


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.1.

## Launching the demo application

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development

### Build the lib

Run `ng build deck-of-cards` to build the project. The build artifacts will be stored in the `dist/` directory..

### Quality tasks

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test deck-of-cards` to execute the unit tests of the deck-of-cards library.

Run `npm run lint` to execute a full tslint analysis
