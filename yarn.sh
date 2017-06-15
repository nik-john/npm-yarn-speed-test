#!/usr/bin/env bash

cd myapp &&
rm -rf node_modules yarn.lock package-lock.json &&
/usr/bin/time -p yarn
