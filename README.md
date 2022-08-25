# Demo: Docker container roles pattern for NestJS apps

This sample project demonstrates the usage of container role pattern when deploying NestJS apps.

See the full article
here: []()

### Starting the app

Install dependencies: \
`npm i`

Pull Redis container: \
`docker pull redis:7-alpine`

Build the application container: \
`DOCKER_BUILDKIT=1 docker build --pull -t role-app -f docker/app/Dockerfile .`

Build nginx proxy container: \
`DOCKER_BUILDKIT=1 docker build --pull -t role-app-nginx -f docker/nginx/Dockerfile .`

Start the stack: \
`docker-compose up -d`

Stop the stack: \
`docker-compose down`