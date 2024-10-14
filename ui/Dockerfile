# Use a compatible Node.js version (>= 18.17.1)
FROM node:18.17.1

# Install build tools for compiling native modules if necessary
RUN apt-get update && apt-get install -y build-essential python3

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the container
COPY package.json yarn.lock ./

# Install dependencies using Yarn with --ignore-optional
RUN yarn install --ignore-optional

# Copy the rest of the application code to the working directory
COPY . .

# Set environment variable for the port
ENV PORT=4321

# Expose the port so you can access the app
EXPOSE 4321

# Command to start the Astro development server
CMD ["yarn", "dev"]
