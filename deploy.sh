#!/usr/bin/env sh

set -e

npm i 
npm run build

npm run deploy

