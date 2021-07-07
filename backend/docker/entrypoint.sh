#!/bin/bash
cd /home/node/app/backend
yarn 
sleep 1m
yarn typeorm migration:run
yarn dev