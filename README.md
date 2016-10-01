continuous [![build](https://travis-ci.org/daggerok/continuous.svg?branch=master)](https://travis-ci.org/daggerok/continuous)
==========

this project demonstrate, how to do in same time:
- serve two web-apps in spring-boot container
- implement in spring security public and closed functionality using in-memory and spring-data auth

```bash
docker-compose -f src/main/docker/all.yml up -d --build --remove-orphans
gradle build bootRun
docker-compose -f src/main/docker/all.yml down
```

required *nix and nodejs installed
