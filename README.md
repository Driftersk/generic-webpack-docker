# Sample Docker + Webpack

This repository is created for this [Medium post](https://medium.com/@andyccs/ae0e73243db4)

# How to run this project?

```Shell
# For development
$ node index.js

# For production
$ webpack
$ NODE_ENV=production node index.js
```

# Useful tips:
- to get inside running container use `$docker exec -it <container_name> /bin/bash`
- to delete all inactive containers use ``docker container rm `docker ps -aq -f status=exited` ``
- on windows there can be problem with file path, especially with :, set this enviroment variable `COMPOSE_CONVERT_WINDOWS_PATHS=1` to fix the problem
