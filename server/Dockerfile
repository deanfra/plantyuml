FROM timbru31/java-node

# install graphvis
RUN apt-get update && apt-get install -y graphviz

# setup project
WORKDIR /app
COPY package*.json ./
COPY ./ ./
RUN npm i
EXPOSE 3001:3001

CMD ["npm", "run", "dev"]