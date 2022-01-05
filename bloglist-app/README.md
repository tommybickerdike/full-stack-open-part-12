Setting up docker containers

1) Set .env variables in root directory ./
```
MONGODB_URI=
PORT=3003
SECRET=anythinghere
TEST_MONGODB_URI=
```

2) Build docker containers 
`docker-compose -f docker-compose.dev.yml up --build`