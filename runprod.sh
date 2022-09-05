#!/bin/bash

cd backend
sudo docker-compose build web swagger db
sudo docker-compose up -d web swagger db

cd ..
cd frontend
sudo docker-compose build front-prod
sudo docker-compose up -d front-prod