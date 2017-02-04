# Sample Docker + Webpack

This repository is created for this [Medium post](https://medium.com/@andyccs/ae0e73243db4)

# How to run this project?

### Inside docker container (recommended)
1. edit `mode.env` set `NODE_ENV=production` for production use or `NODE_ENV=dev` for development use
2. run `docker-compose up`
3. access your project on `http://localhost:80` in production use, `http://localhost:8080` in development use

### Without docker
```Shell
# For development
$ node index.js

# For production
$ webpack
$ NODE_ENV=production node index.js
```

# Useful tips:
- get inside running container use `$docker exec -it <container_name> /bin/bash`
- delete all inactive containers use ``docker container rm `docker ps -aq -f status=exited` ``
- on windows there can be problem with file path, especially with :, set this enviroment variable `COMPOSE_CONVERT_WINDOWS_PATHS=1` to fix the problem
- list all images `docker images -a`
- list all containers `docker ps -a`
- list all volumes `docker volume list`

## Usage without docker-compose, just docker:
This runs application in production mode, which can be accesses on `http://localhost:80`

1. navigate to app directory (where `Dockerfile` is located)
2. build image `docker build -t drft/generic-webpack-docker .`
3. running container ``docker run -d -v `pwd`:/usr/src/app/ -p 80:4000 drft/generic-webpack-docker``
