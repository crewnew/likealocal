#!/bin/bash
echo "Clearing all docker data..."
docker stop $(docker ps -aq)
docker rm $(docker ps -aq)
docker rmi $(docker images -q)
echo "Pulling changes from git branch - master..."
git pull
echo "Building a docker image..."
docker build -t like-a-local .
echo "Running a docker container..."
docker run -d --restart=always --name like-a-local-fe -p 80:80 like-a-local
