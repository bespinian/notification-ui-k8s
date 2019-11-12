# notification-ui

An app for showing the capabilities of Kubernetes. This is the UI component.

## Create a new version

1. Run a productive webpack build

```
npm run build:prd
```

2. Build a new docker image

```
docker build --no-cache -t mathiskretz/notification-ui .
```

3. Push the docker image to Docker Hub

```
docker push mathiskretz/notification-ui:latest
```

## Requirements to run

1. Assumes that there exists an api service named `notification-api`

## Deployment

Use [these YAML files](https://github.com/bespinian/notification-k8s).
