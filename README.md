# Paulicéia 2.0 (front-end)

Pauliceia 2.0 project front-end.


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:8080
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report
```


## Docker

Build the development Docker image:

```
$ docker build -t pauliceia_portal -f docker/Dockerfile.dev . --no-cache
```

Build the production Docker image:

```
$ docker build -t pauliceia/portal:0.0.0 -f docker/Dockerfile.prod . --no-cache
```

You can send the image above to the registry, if you are logged in:

```
$ docker push pauliceia/portal:0.0.0
```
