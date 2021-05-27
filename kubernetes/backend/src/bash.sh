#create docker network
docker network create taskmgt-network

#database
#run docker container
docker run --name postgresdb -e POSTGRES_PASSWORD=mysecretpassword \
-v /custom/mount:/var/lib/postgresql/data --rm --network taskmgt-network \
--env POSTGRES_USER=test_user --env POSTGRES_DB=taskmanagement postgres

#backend
#build docker image
docker build -t tasksmgt_api-image .
#run the docker container
docker run --name tasksmgtapi -p 4000:4000 --rm \
--network taskmgt-network tasksmgt_api-image

#frontend
#build the docker image
docker build -t taskmgt_frontend-image .
#run the docker container
docker run --name taskmgt_frontend --rm -d \
-it --network taskmgt-network taskmgt_frontend-image

#web server
#build nginx image
docker build -t taskmgt_nginx-image .
#run the docker container
docker run --name taskmgt_nginx --rm \
--network taskmgt-network -p 8080:80 taskmgt_nginx-image
