# Use the official Node.js image as a base
FROM node:18

# Create and set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port your app runs on (change if needed)
EXPOSE 3000

# Command to start your app
CMD ["node", "server.js"]
