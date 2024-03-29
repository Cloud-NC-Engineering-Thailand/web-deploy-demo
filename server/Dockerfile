FROM node:20-alpine 

# Create a working directory
WORKDIR /app

# Copy dependency files 
COPY package*.json ./ 
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port where the Node.js server listens
EXPOSE 8080 

#  Command to start the backend (in development mode)
CMD ["npm", "run", "dev"]
