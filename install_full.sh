#!/bin/bash

npm install

pushd projects/deck-of-cards
  npm install
popd

ng build deck-of-cards
