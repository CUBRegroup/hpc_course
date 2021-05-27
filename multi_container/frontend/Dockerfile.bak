#as builder - everything under the as
#builder will be referred to as the builder phase
FROM node:12-alpine as builder

#Any subsequent command will be executed
#relative to this path in the container
WORKDIR /app

#Move file from local machine into the temporary container
#First path is path to folder in local FS to path in container
#first path is relative to the build context
#based on WORKDIR second ./ will be workdir directory
COPY ./package.json ./

#Download and install a dependency
RUN yarn install

COPY ./ ./

#build project and creact build folder
RUN yarn run build

#FROM means start new phase
FROM nginx
EXPOSE 3000

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
#--from=builder means copy from the builder phase
COPY --from=builder /app/build /usr/share/nginx/html


#NGINX has default start command
