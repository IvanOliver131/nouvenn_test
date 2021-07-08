#!/bin/bash
cd /home/node/app/backend
yarn install
yarn typeorm migration:run
yarn dev