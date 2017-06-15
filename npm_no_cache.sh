#!/usr/bin/env bash

cd myapp &&
rm -rf node_modules yarn.lock package-lock.json &&
npm cache clean --force && /usr/bin/time -p npm i
