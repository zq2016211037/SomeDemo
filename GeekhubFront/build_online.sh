#!/usr/bin/env bash

rm -rf dist/*
npm run release

cd dist
tar zcvf geekhub.tar.gz *

shopt -s  extglob
rm -rf !(geekhub.tar.gz)