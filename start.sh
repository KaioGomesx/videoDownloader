#!/bin/env bash

mkdir dist 2> /dev/null
node src/index.js $1
node src/cut.js
