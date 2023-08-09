# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy application code to the container
COPY . .

ENV USER=admin
ENV PASSWORD=wanted7575
ENV DATABASE=hello
ENV HOST=myserver-db-1

# Expose a port for the application (change as needed)
EXPOSE 9001

# Command to run your Node.js application
CMD ["npm", "start"]
