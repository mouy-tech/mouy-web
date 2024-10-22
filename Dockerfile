# Use the official Node.js image
FROM node:20-alpine AS builder

# Set the working directory
WORKDIR /app

# Copy only the dependencies config for caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application files
COPY . .

# Build the Next.js application
RUN yarn build

# Install only production dependencies
RUN yarn install

# Expose the port Next.js will run on
EXPOSE 3000

# Start the application
CMD ["yarn", "start"]
